import { useNavigate } from "react-router-dom";

function Refund() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="bg-[#34bf87] text-white p-4 flex items-center shadow">
        <button onClick={() => navigate(-1)} className="mr-3 text-xl">
          ←
        </button>
        <span className="font-bold">환불 안내</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">교육 시작 전</h3>
          <p className="text-gray-600">전액 환불</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">교재 제작 완료 시</h3>
          <p className="text-gray-600">교재비 제외 후 환불</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">교육 시작 후</h3>
          <p className="text-gray-600">환불 불가</p>
        </div>
      </div>
      {/* 챗봇으로 돌아가기 버튼 */}
      <div className="p-4 bg-white border-t">
        <button
          onClick={() => navigate("/")}
          className="w-full p-3 bg-[#34bf87] text-white rounded-lg font-bold hover:bg-[#2da776] transition-colors"
        >
          💬 챗봇으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default Refund;
