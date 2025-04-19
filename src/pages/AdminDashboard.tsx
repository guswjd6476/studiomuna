import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_PASSWORD = 'moona2025';

interface Program {
  id: string;
  type: string;
  title: string;
  imgurl1: string;
  description: string;
}

interface Event {
  id: string;
  title: string;
  content: string;
  image_url: string;
}

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const [programs, setPrograms] = useState<Program[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const { data: programsData } = await supabase.from('programs').select('*');
    const { data: eventsData } = await supabase.from('recent_events').select('*');
    setPrograms(programsData || []);
    setEvents(eventsData || []);
    setLoading(false);
  };

  useEffect(() => {
    if (authorized) fetchData();
  }, [authorized]);

  const handleProgramChange = (id: string, field: keyof Program, value: string) => {
    setPrograms((prev) =>
      prev.map((program) =>
        program.id === id ? { ...program, [field]: value } : program
      )
    );
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
      imgurl1: program.imgurl1,
      description: program.description,
    }).eq('id', program.id);
    fetchData();
  };

  const updateEvent = async (event: Event) => {
    await supabase.from('recent_events').update({
      title: event.title,
      content: event.content,
      image_url: event.image_url,
    }).eq('id', event.id);
    fetchData();
  };

  const addEvent = async () => {
    const { data } = await supabase
      .from('recent_events')
      .insert({ title: '', content: '', image_url: '' })
      .select();

    if (data) {
      setEvents([...events, data[0]]);
    }
  };

  const deleteEvent = async (id: string) => {
    await supabase.from('recent_events').delete().eq('id', id);
    fetchData();
  };

  if (!authorized) {
    return (
      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-[#296129]">비밀번호 입력</h1>
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <Button className="mt-4" onClick={() => setAuthorized(passwordInput === ADMIN_PASSWORD)}>
          확인
        </Button>
        {passwordInput && passwordInput !== ADMIN_PASSWORD && (
          <p className="text-red-500 mt-2">비밀번호가 틀렸습니다.</p>
        )}
      </div>
    );
  }

  if (loading) return <div className="p-10">로딩 중...</div>;

  return (
    <div className="p-10 space-y-16">
      <h1 className="text-4xl font-bold text-[#296129]">Admin Page</h1>

      {/* 프로그램 수정 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#296129]">프로그램 수정</h2>
        <div className="space-y-6">
          {programs.map((program) => (
            <div key={program.id} className="p-4 border rounded-xl shadow-sm space-y-2">
              <Input
                value={program.title}
                onChange={(e) => handleProgramChange(program.id, 'title', e.target.value)}
                placeholder="제목"
              />
              <Input
                value={program.imgurl1}
                onChange={(e) => handleProgramChange(program.id, 'imgurl1', e.target.value)}
                placeholder="이미지 URL"
              />
              <Input
                value={program.description}
                onChange={(e) => handleProgramChange(program.id, 'description', e.target.value)}
                placeholder="설명"
              />
              <Button onClick={() => updateProgram(program)}>저장</Button>
            </div>
          ))}
        </div>
      </section>

      {/* 최근 행사 수정 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#296129]">최근 행사 수정</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="p-4 border rounded-xl shadow-sm space-y-2">
              <Input
                value={event.title}
                onChange={(e) => handleEventChange(event.id, 'title', e.target.value)}
                placeholder="제목"
              />
              <Input
                value={event.content}
                onChange={(e) => handleEventChange(event.id, 'content', e.target.value)}
                placeholder="내용"
              />
              <Input
                value={event.image_url}
                onChange={(e) => handleEventChange(event.id, 'image_url', e.target.value)}
                placeholder="이미지 URL"
              />
              <div className="flex gap-2">
                <Button onClick={() => updateEvent(event)}>저장</Button>
                <Button variant="destructive" onClick={() => deleteEvent(event.id)}>삭제</Button>
              </div>
            </div>
          ))}
          <Button onClick={addEvent}>새 행사 추가</Button>
        </div>
      </section>
    </div>
  );
}
