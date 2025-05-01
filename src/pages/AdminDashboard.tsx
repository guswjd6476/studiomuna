import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_PASSWORD = "moona";
const supabaseProgramImageBucket = "program-images";
const supabaseEventImageBucket = "event-images";

interface Program {
  id: string;
  type: string;
  title: string;
  image_filename: string;
  description: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
}

const getPublicImageUrl = (bucket: string, filePath: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return data?.publicUrl || "";
};

const FileDropzone = ({ onDrop }: { onDrop: (files: File[]) => void }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="border-dashed p-4 border-2 border-gray-300 rounded-lg cursor-pointer">
      <input {...getInputProps()} />
      <p className="text-center text-gray-500">이미지 파일을 드래그하거나 클릭하세요</p>
    </div>
  );
};

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [newProgram, setNewProgram] = useState<Partial<Program>>({ type: "1" });
  const [newEvent, setNewEvent] = useState<Partial<Event>>({});
  const [isAddingProgram, setIsAddingProgram] = useState(false);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"programs" | "events">("programs");
  const [selectedProgramType, setSelectedProgramType] = useState<string>("all");
  const [editingProgramId, setEditingProgramId] = useState<string | null>(null);
  const [editedProgram, setEditedProgram] = useState<Program | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [programPreviewImageUrl, setProgramPreviewImageUrl] = useState<string | null>(null);
  const [eventPreviewImageUrl, setEventPreviewImageUrl] = useState<string | null>(null);




  useEffect(() => {
    if (authorized) fetchData();
  }, [authorized]);

  const fetchData = async () => {
    setLoading(true);
    const { data: programsData } = await supabase.from("programs").select("*");
    const { data: eventsData } = await supabase.from("recent_events").select("*");
    setPrograms(programsData || []);
    setEvents(eventsData || []);
    setLoading(false);
  };

  const handleFileDrop = async (files: File[], bucket: string, setFilename: (filename: string) => void) => {
    const file = files[0];
    const ext = file.name.split(".").pop();
    const filePath = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from(bucket).upload(filePath, file);
    if (error) {
      alert("이미지 업로드 실패!");
      return;
    }
    setFilename(filePath);
  };

  const addProgram = async () => {
    if (!newProgram.title || !newProgram.description || !newProgram.image_filename) return;
    const { data, error } = await supabase.from("programs").insert([newProgram]).select();
    if (!error && data) {
      setPrograms((prev) => [...prev, data[0]]);
      setNewProgram({ type: "1" });
      setIsAddingProgram(false);
    }
  };

  const addEvent = async () => {
    if (!newEvent.title || !newEvent.description || !newEvent.date || !newEvent.location || !newEvent.image_url) return;
    const { data, error } = await supabase.from("recent_events").insert([newEvent]).select();
    if (!error && data) {
      setEvents((prev) => [...prev, data[0]]);
      setNewEvent({});
      setIsAddingEvent(false);
    }
  };

  const handleEventChange = (id: string, field: keyof Event, value: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, [field]: value } : event
      )
    );
  };

  const updateProgram = async (program: Program) => {
    await supabase.from('programs').update({
      title: program.title,
      image_filename: program.image_filename,
      description: program.description,
    }).eq('id', program.id);
    fetchData();
  };

  const updateEvent = async (event: Event) => {
    await supabase.from('recent_events').update({
      title: event.title,
      description: event.description,
      image_url: event.image_url,
      date: event.date,
      location: event.location
    }).eq('id', event.id);
    fetchData();
  };
  const deleteProgram = async (id: string) => {
    await supabase.from("programs").delete().eq("id", id);
    setPrograms((prev) => prev.filter((p) => p.id !== id));
  };

  const deleteEvent = async (id: string) => {
    await supabase.from("recent_events").delete().eq("id", id);
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };
  const getProgramTypeLabel = (type: string) => {
    switch (type) {
      case "1":
        return "Exploration Program";
      case "2":
        return "Activity Program";
      case "3":
        return "Oneday Program";
      case "4":
        return "Giftican Program";
      default:
        return "기타";
    }
  };
  
  if (!authorized) {
    return (
      <div className="p-10 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-6 text-[#296129]">관리자 로그인</h1>
        <Input
          type="password"
          placeholder="비밀번호 입력"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") passwordInput === ADMIN_PASSWORD ? setAuthorized(true) : alert("비밀번호가 틀렸습니다!");
          }}
        />
        <Button className="mt-4 w-full" onClick={() => passwordInput === ADMIN_PASSWORD ? setAuthorized(true) : alert("비밀번호가 틀렸습니다!")}>확인</Button>
      </div>
    );
  }

  if (loading) return <div className="p-10 text-center">로딩 중...</div>;

  const filteredPrograms = selectedProgramType === "all"
    ? programs
    : programs.filter((p) => p.type === selectedProgramType);

  return (
    <div className="p-10 space-y-12">
      <h1 className="text-4xl font-bold text-[#296129] text-center">Admin Page</h1>

      <div className="flex gap-4 justify-center mb-8">
        <Button variant={activeTab === "programs" ? "default" : "outline"} onClick={() => setActiveTab("programs")}>프로그램</Button>
        <Button variant={activeTab === "events" ? "default" : "outline"} onClick={() => setActiveTab("events")}>행사</Button>
      </div>

      {activeTab === "programs" && (
        <>
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              <select value={selectedProgramType} onChange={(e) => setSelectedProgramType(e.target.value)} className="border p-2 rounded">
                <option value="all">전체</option>
                <option value="1">Exploration Program</option>
                <option value="2">Activity Program</option>
                <option value="3">Oneday Program</option>
                <option value="4">Giftican Program</option>
              </select>
              <Button onClick={() => setIsAddingProgram(!isAddingProgram)}>{isAddingProgram ? "추가 취소" : "새 프로그램 추가"}</Button>
            </div>
          </div>

          {isAddingProgram && (
            <div className="space-y-4 mb-8">
              <Input placeholder="제목" value={newProgram.title || ""} onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })} />
              <textarea
                placeholder="설명"
                value={newProgram.description || ""}
                onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                className="w-full border rounded p-3 text-base resize-none h-32 focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <select value={newProgram.type || "1"} onChange={(e) => setNewProgram({ ...newProgram, type: e.target.value })} className="border p-3 rounded w-full">
                <option value="1">Exploration Program</option>
                <option value="2">Activity Program</option>
                <option value="3">Oneday Program</option>
                <option value="4">Giftican Program</option>
              </select>
              <FileDropzone
                onDrop={(files) => {
                  const file = files[0];
                  if (file) {
                    setProgramPreviewImageUrl(URL.createObjectURL(file));
                    handleFileDrop(files, supabaseProgramImageBucket, (filename) =>
                      setNewProgram({ ...newProgram, image_filename: filename })
                    );
                  }
                }}
                />

              {programPreviewImageUrl && (
                <img
                  src={programPreviewImageUrl}
                  alt="미리보기"
                  className="w-full h-48 object-cover rounded mt-2"
                />
              )}

              <Button onClick={addProgram} className="w-full bg-[#296129] text-white mt-4">프로그램 추가</Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">

    {editingProgramId === program.id ? (
      <div className="space-y-3">
        <Input
          placeholder="제목"
          value={editedProgram?.title || ""}
          onChange={(e) =>
            setEditedProgram((prev) => ({ ...prev!, title: e.target.value }))
          }
        />
        <textarea
          value={editedProgram?.description || ""}
          onChange={(e) =>
            editedProgram && setEditedProgram({ ...editedProgram, description: e.target.value })
          }
          className="w-full border rounded p-3 text-base resize-none h-32 focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select
          value={editedProgram?.type || "1"}
          onChange={(e) =>
            setEditedProgram((prev) => ({ ...prev!, type: e.target.value }))
          }
          className="border p-3 rounded w-full"
        >
          <option value="1">Exploration Program</option>
          <option value="2">Activity Program</option>
          <option value="3">Oneday Program</option>
          <option value="4">Giftican Program</option>
        </select>
        <FileDropzone
        onDrop={(files) => {
          const file = files[0];
          if (file) {
            setPreviewImageUrl(URL.createObjectURL(file));
            handleFileDrop(files, supabaseEventImageBucket, (filename) => {
              setNewEvent({ ...newEvent, image_url: filename });
            });
          }
        }}
        />
         {previewImageUrl && (
          <img
            src={previewImageUrl}
            alt="미리보기"
            className="w-full h-48 object-cover rounded mt-2"
          />
        )}
        <div className="flex justify-between">
          <Button
            onClick={async () => {
              if (editedProgram) {
                await updateProgram(editedProgram);
                setEditingProgramId(null);
              }
            }}
            className="bg-[#296129] text-white"
            size="sm"
          >
            저장
          </Button>
          <Button
            onClick={() => {
              setEditingProgramId(null);
              setEditedProgram(null);
            }}
            variant="outline"
            size="sm"
          >
            취소
          </Button>
        </div>
      </div>
    ) : (
      // 기본 보기
      <>
        <div className="text-xl font-semibold mb-4">{program.title}</div>
        <img
          src={getPublicImageUrl(supabaseProgramImageBucket, program.image_filename)}
          alt={program.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="whitespace-pre-line text-gray-600 mb-4">{program.description}</p>
        <div className="text-sm text-gray-500 mb-2">
          {getProgramTypeLabel(program.type)}
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => {
              setEditingProgramId(program.id);
              setEditedProgram(program);
            }}
            variant="outline"
            size="sm"
          >
            수정
          </Button>
          <Button onClick={() => deleteProgram(program.id)} variant="outline" size="sm">
            삭제
          </Button>
        </div>
      </>
    )}
  </div>
))}

          </div>
        </>
      )}

      {activeTab === "events" && (
        <>
          <div className="flex justify-center mb-6">
            <Button onClick={() => setIsAddingEvent(!isAddingEvent)}>{isAddingEvent ? "행사 추가 취소" : "새 행사 추가"}</Button>
          </div>

          {isAddingEvent && (
            <div className="space-y-4 mb-8">
              <Input placeholder="행사 제목" value={newEvent.title || ""} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              <textarea
                placeholder="설명"
                value={newEvent.description || ""}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
                className="w-full border rounded p-3 text-base resize-none h-32 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Input placeholder="날짜" value={newEvent.date || ""} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
              <Input placeholder="장소" value={newEvent.location || ""} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
              <FileDropzone
              onDrop={(files) => {
                const file = files[0];
                if (file) {
                  setEventPreviewImageUrl(URL.createObjectURL(file));
                  handleFileDrop(files, supabaseEventImageBucket, (filename) =>
                    setNewEvent({ ...newEvent, image_url: filename })
                  );
                }
              }}
              />

            {eventPreviewImageUrl && (
              <img
                src={eventPreviewImageUrl}
                alt="미리보기"
                className="w-full h-48 object-cover rounded mt-2"
              />
            )}

              <Button onClick={addEvent} className="w-full bg-[#296129] text-white mt-4">행사 추가</Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
  <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 space-y-2">
    <Input
      value={event.title}
      onChange={(e) => handleEventChange(event.id, "title", e.target.value)}
      placeholder="제목"
    />
    <textarea
      value={event.description}
      onChange={(e) => handleEventChange(event.id, "description", e.target.value)}
    className=" w-full border rounded p-3 text-base resize-none h-32 focus:outline-none focus:ring-2 focus:ring-ring"
    />
    <Input
      value={event.date}
      onChange={(e) => handleEventChange(event.id, "date", e.target.value)}
      placeholder="날짜"
    />
    <Input
      value={event.location}
      onChange={(e) => handleEventChange(event.id, "location", e.target.value)}
      placeholder="장소"
    />
    <Input
      value={event.image_url}
      onChange={(e) => handleEventChange(event.id, "image_url", e.target.value)}
      placeholder="이미지 파일명"
    />
    <div className="flex justify-between mt-4">
      <Button onClick={() => updateEvent(event)} variant="outline" size="sm">저장</Button>
      <Button onClick={() => deleteEvent(event.id)} variant="outline" size="sm">삭제</Button>
    </div>
  </div>
))}

          </div>
        </>
      )}
    </div>
  );
}
