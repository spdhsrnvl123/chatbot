import type { Message } from "../types/chat";

interface ChatMessageProps {
  message: Message;
  onDetailClick: (detailType: string) => void;
}

function ChatMessage({ message, onDetailClick }: ChatMessageProps) {
  const { type, text, showDetail, detailType, isNew } = message;
  const isBot = type === "bot";

  return (
    <div className={isNew ? "animate-slideUp" : ""}>
      <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
        {isBot && (
          <div className="w-8 h-8 bg-[#34bf87] rounded-full flex items-center justify-center mr-2 text-white text-sm">
            🏗️
          </div>
        )}
        <div
          className={`max-w-[70%] p-3 rounded-2xl whitespace-pre-line ${
            isBot ? "bg-white text-gray-800 shadow" : "bg-[#34bf87] text-white"
          }`}
        >
          {text}
        </div>
      </div>

      {showDetail && isBot && detailType && (
        <div className="mt-2 ml-10">
          <button
            onClick={() => onDetailClick(detailType)}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs hover:bg-gray-300 transition-colors"
          >
            상세보기 →
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
