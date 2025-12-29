import { useState, useRef, useEffect } from "react";

interface Message {
  type: "bot" | "user";
  text: string;
}

interface MenuItem {
  id: number;
  label: string;
  response: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "👋 안녕하세요! 건설산업교육원입니다.\n궁금한 게 있으신가요?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: "교육과정 안내",
      response:
        "건설기술인 직무교육, 정밀안전진단, 정기안전점검 등 다양한 교육과정이 있습니다.",
    },
    {
      id: 2,
      label: "수강신청 방법",
      response:
        "홈페이지에서 회원가입 후 원하는 교육과정을 선택하여 신청하시면 됩니다.",
    },
    {
      id: 3,
      label: "환불 안내",
      response:
        "교육 시작 전 취소 시 전액 환불, 교재 제작이 완료된 경우 교재비 제외 후 환불됩니다.",
    },
    {
      id: 4,
      label: "고객센터 연결",
      response: "대표번호: 02-575-7123\n원격교육문의: 1522-2938",
    },
  ];

  const handleMenuClick = (item: MenuItem) => {
    setMessages([
      ...messages,
      { type: "user", text: item.label },
      { type: "bot", text: item.response },
    ]);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* 헤더 */}
      <div className="bg-[#34bf87] text-white p-4 text-center font-bold shadow">
        건설산업교육원 챗봇
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                msg.type === "bot"
                  ? "bg-[#34bf87] text-white rounded-tl-none"
                  : "bg-white text-gray-800 rounded-tr-none shadow"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 메뉴 버튼 */}
      <div className="p-4 bg-white border-t flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item)}
            className="p-3 border border-[#34bf87] text-[#34bf87] rounded-lg hover:bg-[#34bf87] hover:text-white transition-colors text-sm"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
