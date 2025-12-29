import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Message {
  type: "bot" | "user";
  text: string;
  showMenu?: boolean;
  showDetail?: boolean;
  detailType?: string;
  isNew?: boolean;
}

interface MenuItem {
  id: number;
  label: string;
  response: string;
  hasDetail?: boolean;
  detailType?: string;
}

function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "👋 안녕하세요! 건설산업교육원입니다.\n궁금한 게 있으신가요?",
      showMenu: true,
      isNew: true,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: "교육과정 안내",
      response:
        "건설기술인 직무교육, 정밀안전진단, 정기안전점검 등 다양한 교육과정이 있습니다.",
      hasDetail: true,
      detailType: "course",
    },
    {
      id: 2,
      label: "수강신청 방법",
      response:
        "홈페이지에서 회원가입 후 원하는 교육과정을 선택하여 신청하시면 됩니다.",
      hasDetail: true,
      detailType: "enrollment",
    },
    {
      id: 3,
      label: "환불 안내",
      response:
        "교육 시작 전 취소 시 전액 환불, 교재 제작이 완료된 경우 교재비 제외 후 환불됩니다.",
      hasDetail: true,
      detailType: "refund",
    },
    {
      id: 4,
      label: "고객센터 연결",
      response: "대표번호: 02-575-7123\n원격교육문의: 1522-2938",
      hasDetail: true,
      detailType: "customer",
    },
  ];

  const handleMenuClick = (item: MenuItem) => {
    // 유저 메시지 추가
    setMessages((prev) => [
      ...prev.map((msg) => ({ ...msg, showMenu: false, isNew: false })),
      { type: "user", text: item.label, isNew: true },
    ]);

    // 타이핑 표시
    setIsTyping(true);

    // 0.5초 후 봇 응답
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: item.response,
          showMenu: true,
          showDetail: item.hasDetail,
          detailType: item.detailType,
          isNew: true,
        },
      ]);
    }, 500);
  };

  const handleDetailClick = (detailType: string) => {
    if (window.parent !== window) {
      window.parent.postMessage({ action: "openPopup", type: detailType }, "*");
    } else {
      navigate(`/${detailType}`);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="bg-[#34bf87] text-white p-4 text-center font-bold shadow">
        건설산업교육원 챗봇
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.isNew ? "animate-slideUp" : ""}>
            <div
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.type === "bot" && (
                <div className="w-8 h-8 bg-[#34bf87] rounded-full flex items-center justify-center mr-2 text-white text-sm">
                  🏗️
                </div>
              )}
              <div
                className={`max-w-[70%] p-3 rounded-2xl whitespace-pre-line ${
                  msg.type === "bot"
                    ? "bg-white text-gray-800 shadow"
                    : "bg-[#34bf87] text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>

            {msg.showDetail && msg.type === "bot" && msg.detailType && (
              <div className="mt-2 ml-10">
                <button
                  onClick={() => handleDetailClick(msg.detailType!)}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs hover:bg-gray-300 transition-colors"
                >
                  상세보기 →
                </button>
              </div>
            )}

            {msg.showMenu && msg.type === "bot" && (
              <div className="mt-3 ml-10 flex flex-wrap gap-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                    className="px-3 py-2 bg-white border border-[#34bf87] text-[#34bf87] rounded-full text-sm hover:bg-[#34bf87] hover:text-white transition-colors shadow-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* 타이핑 인디케이터 */}
        {isTyping && (
          <div className="flex justify-start animate-slideUp">
            <div className="w-8 h-8 bg-[#34bf87] rounded-full flex items-center justify-center mr-2 text-white text-sm">
              🏗️
            </div>
            <div className="bg-white p-3 rounded-2xl shadow">
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Chatbot;
