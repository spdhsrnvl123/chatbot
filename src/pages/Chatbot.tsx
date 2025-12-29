import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Message {
  type: "bot" | "user";
  text: string;
  showMenu?: boolean;
  showDetail?: boolean;
  detailType?: string;
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
    setMessages([
      ...messages.map((msg) => ({ ...msg, showMenu: false })),
      { type: "user", text: item.label },
      {
        type: "bot",
        text: item.response,
        showMenu: true,
        showDetail: item.hasDetail,
        detailType: item.detailType,
      },
    ]);
  };

  const handleDetailClick = (detailType: string) => {
    // iframe 안에 있는지 확인
    if (window.parent !== window) {
      // iframe 안이면 JSP에 메시지 보내기
      window.parent.postMessage({ action: "openPopup", type: detailType }, "*");
    } else {
      // 단독 실행이면 페이지 이동
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
          <div key={idx}>
            <div
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

            {msg.showDetail && msg.type === "bot" && msg.detailType && (
              <div className="mt-2 ml-1">
                <button
                  onClick={() => handleDetailClick(msg.detailType!)}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs hover:bg-gray-300 transition-colors"
                >
                  상세보기 →
                </button>
              </div>
            )}

            {msg.showMenu && msg.type === "bot" && (
              <div className="mt-3 flex flex-wrap gap-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                    className="px-3 py-2 bg-white border border-[#34bf87] text-[#34bf87] rounded-full text-sm hover:bg-[#34bf87] hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Chatbot;
