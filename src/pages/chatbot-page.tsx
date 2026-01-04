import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatHeader from "../components/chat-header";
import ChatMessage from "../components/chat-message";
import MenuButtons from "../components/menu-buttons";
import TypingIndicator from "../components/typing-indicator";
import type { MenuItem, Message } from "../types/chat";
import { data } from "../db";

function Chatbot() {
  const navigate = useNavigate();
  const menuItems: MenuItem[] = data;
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

  // ========== 헬퍼 함수 ==========

  //기존 메시지 전부 숨김
  const hideAllMenus = () => {
    setMessages((prev) =>
      prev.map((msg) => ({ ...msg, showMenu: false, isNew: false }))
    );
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { type: "user", text, isNew: true }]);
  };

  const addBotMessage = (item: MenuItem) => {
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
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log(messages);
  }, [messages, isTyping]);

  // ========== 이벤트 핸들러 ==========

  const handleMenuClick = (item: MenuItem) => {
    hideAllMenus();
    addUserMessage(item.label);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(item);
    }, 500);
  };

  const handleDetailClick = (detailType: string) => {
    if (window.parent !== window) {
      window.parent.postMessage({ action: "openPopup", type: detailType }, "*");
    } else {
      navigate(`/${detailType}`);
    }
  };

  // ========== 렌더링 ==========

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <ChatMessage message={msg} onDetailClick={handleDetailClick} />
            {msg.showMenu && msg.type === "bot" && (
              <MenuButtons items={menuItems} onMenuClick={handleMenuClick} />
            )}
          </div>
        ))}

        {isTyping && <TypingIndicator />}
        <div className="w-full h-6 bg-violet-600" ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Chatbot;
