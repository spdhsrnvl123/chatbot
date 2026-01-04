function TypingIndicator() {
  return (
    <div className="flex justify-start animate-slideUp">
      <div className="w-8 h-8 bg-[#34bf87] rounded-full flex items-center justify-center mr-2 text-white text-sm">
        🏗️
      </div>
      <div className="bg-white p-3 rounded-2xl shadow">
        <div className="flex space-x-1">
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;
