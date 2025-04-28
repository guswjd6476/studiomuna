"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_PASSWORD = "moona2025";
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
  image_filename: string;
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

  useEffect(() => {
    if (authorized) fetchData();
  }, [authorized]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data: programsData } = await supabase.from("programs").select("*");
      const { data: eventsData } = await supabase.from("recent_events").select("*");
      setPrograms(programsData || []);
      setEvents(eventsData || []);
    } catch (error) {
      console.error("데이터 불러오기 실패", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileDrop = async (files: File[], bucket: string, setFilename: (filename: string) => void) => {
    const file = files[0];
    const ext = file.name.split(".").pop();
    const filePath = `${Date.now()}.${ext}`;

    const { error } = await supabase.storage.from(bucket).upload(filePath, file);
    if (error) {
      alert("이미지 업로드 실패!");
      console.error(error);
      return;
    }
    setFilename(filePath);
  };

  const handleInputChange = <T extends Program | Event>(
    id: string,
    field: keyof T,
    value: string,
    list: T[],
    setList: (list: T[]) => void
  ) => {
    setList(list.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
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
    if (!newEvent.title || !newEvent.description || !newEvent.date || !newEvent.location || !newEvent.image_filename) return;
    const { data, error } = await supabase.from("recent_events").insert([newEvent]).select();
    if (!error && data) {
      setEvents((prev) => [...prev, data[0]]);
      setNewEvent({});
      setIsAddingEvent(false);
    }
  };

  const updateProgram = async (program: Program) => {
    const { error } = await supabase.from("programs").update(program).eq("id", program.id);
    if (!error) fetchData();
  };

  const updateEvent = async (event: Event) => {
    const { error } = await supabase.from("recent_events").update(event).eq("id", event.id);
    if (!error) fetchData();
  };

  const deleteProgram = async (id: string) => {
    await supabase.from("programs").delete().eq("id", id);
    setPrograms((prev) => prev.filter((p) => p.id !== id));
  };

  const deleteEvent = async (id: string) => {
    await supabase.from("recent_events").delete().eq("id", id);
    setEvents((prev) => prev.filter((e) => e.id !== id));
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
            if (e.key === "Enter") {
              if (passwordInput === ADMIN_PASSWORD) {
                setAuthorized(true);
              } else {
                alert("비밀번호가 틀렸습니다!");
              }
            }
          }}
        />
        <Button className="mt-4 w-full" onClick={() => {
          if (passwordInput === ADMIN_PASSWORD) {
            setAuthorized(true);
          } else {
            alert("비밀번호가 틀렸습니다!");
          }
        }}>
          확인
        </Button>
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

      {/* Tabs */}
      <div className="flex gap-4 justify-center mb-8">
        <Button variant={activeTab === "programs" ? "default" : "outline"} onClick={() => setActiveTab("programs")}>프로그램</Button>
        <Button variant={activeTab === "events" ? "default" : "outline"} onClick={() => setActiveTab("events")}>행사</Button>
      </div>

      {/* Programs Tab */}
      {activeTab === "programs" && (
        <>
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              <select value={selectedProgramType} onChange={(e) => setSelectedProgramType(e.target.value)} className="border p-2 rounded">
                <option value="all">전체</option>
                <option value="1">Exploration Program(type1)</option>
                <option value="2">Activity Program(type2)</option>
                <option value="3">Oneday Program(type3)</option>
                <option value="4">Giftican Program(type4)</option>
              </select>
              <Button onClick={() => setIsAddingProgram(!isAddingProgram)}>
                {isAddingProgram ? "추가 취소" : "새 프로그램 추가"}
              </Button>
            </div>
          </div>

          {/* Add Program Form */}
          {isAddingProgram && (
            <div className="space-y-4 mb-8">
              <Input
                placeholder="제목"
                value={newProgram.title || ""}
                onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
              />
              <Input
                placeholder="설명"
                value={newProgram.description || ""}
                onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
              />
              <select
                value={newProgram.type || "1"}
                onChange={(e) => setNewProgram({ ...newProgram, type: e.target.value })}
                className="border p-3 rounded w-full text-gray-700"
              >
                <option value="1">Exploration Program</option>
                <option value="2">Activity Program</option>
                <option value="3">Oneday Program</option>
                <option value="4">Giftican Program</option>
              </select>

              <FileDropzone
                onDrop={(files) => handleFileDrop(files, supabaseProgramImageBucket, (filename) => setNewProgram({ ...newProgram, image_filename: filename }))}
              />

              <Button
                onClick={addProgram}
                className="w-full bg-[#296129] text-white mt-4"
              >
                프로그램 추가
              </Button>
            </div>
          )}

          {/* Programs List - 카드 형식으로 나열 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                <div className="text-xl font-semibold mb-4">{program.title}</div>
                <img src={getPublicImageUrl(supabaseProgramImageBucket, program.image_filename)} alt={program.title} className="w-full h-48 object-cover rounded mb-4" />
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between">
                  <Button onClick={() => updateProgram(program)} variant="outline" size="sm">수정</Button>
                  <Button onClick={() => deleteProgram(program.id)} variant="outline" size="sm">삭제</Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Events Tab */}
      {activeTab === "events" && (
        <>
          <div className="flex justify-center mb-6">
            <Button onClick={() => setIsAddingEvent(!isAddingEvent)}>
              {isAddingEvent ? "행사 추가 취소" : "새 행사 추가"}
            </Button>
          </div>

          {/* Add Event Form */}
          {isAddingEvent && (
            <div className="space-y-4 mb-8">
              <Input
                placeholder="행사 제목"
                value={newEvent.title || ""}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <Input
                placeholder="설명"
                value={newEvent.description || ""}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
              <Input
                placeholder="날짜"
                value={newEvent.date || ""}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <Input
                placeholder="장소"
                value={newEvent.location || ""}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />

              <FileDropzone
                onDrop={(files) => handleFileDrop(files, supabaseEventImageBucket, (filename) => setNewEvent({ ...newEvent, image_filename: filename }))}
              />

              <Button
                onClick={addEvent}
                className="w-full bg-[#296129] text-white mt-4"
              >
                행사 추가
              </Button>
            </div>
          )}

          {/* Events List - 카드 형식으로 나열 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                <div className="text-xl font-semibold mb-4">{event.title}</div>
                <img src={getPublicImageUrl(supabaseEventImageBucket, event.image_filename)} alt={event.title} className="w-full h-48 object-cover rounded mb-4" />
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="text-sm text-gray-500">{event.date} | {event.location}</div>
                <div className="flex justify-between mt-4">
                  <Button onClick={() => updateEvent(event)} variant="outline" size="sm">수정</Button>
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
