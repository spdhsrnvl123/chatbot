import { useNavigate, useSearchParams } from "react-router-dom";

function Course() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isIframe = searchParams.get("iframe") === "true";

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* 헤더 - iframe 아닐 때만 표시 */}
      {!isIframe && (
        <div className="bg-[#34bf87] text-white p-4 flex items-center shadow">
          <button onClick={() => navigate(-1)} className="mr-3 text-xl">
            ←
          </button>
          <span className="font-bold">교육과정 안내</span>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">건설기술인 직무교육</h3>
          <p className="text-gray-600 text-sm">최초/계속/승급</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">정밀안전진단</h3>
          <p className="text-gray-600 text-sm">신규/보수</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">정기안전점검</h3>
          <p className="text-gray-600 text-sm">건축/토목</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">지하안전평가</h3>
          <p className="text-gray-600 text-sm">신규/보수</p>
        </div>
      </div>

      {/* 챗봇으로 돌아가기 - iframe 아닐 때만 표시 */}
      {!isIframe && (
        <div className="p-4 bg-white border-t">
          <button
            onClick={() => navigate("/")}
            className="w-full p-3 bg-[#34bf87] text-white rounded-lg font-bold hover:bg-[#2da776] transition-colors"
          >
            💬 챗봇으로 돌아가기
          </button>
        </div>
      )}
    </div>
  );
}

export default Course;
