import { useNavigate, useSearchParams } from "react-router-dom";

function Customer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isIframe = searchParams.get("iframe") === "true";

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {!isIframe && (
        <div className="bg-[#34bf87] text-white p-4 flex items-center shadow">
          <button onClick={() => navigate(-1)} className="mr-3 text-xl">
            ←
          </button>
          <span className="font-bold">고객센터 안내</span>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">📞 전화 문의</h3>
          <p className="mb-2">
            <strong>대표번호:</strong> 02-575-7123
          </p>
          <p className="mb-2">
            <strong>원격교육문의:</strong> 1522-2938
          </p>
          <p className="mb-2">
            <strong>플랜트과정:</strong> 02-578-7123
          </p>
          <p>
            <strong>외국어과정:</strong> 02-572-7123
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">🕐 운영시간</h3>
          <p className="mb-2">평일 09:00 ~ 18:00</p>
          <p className="text-gray-600 text-sm">
            (점심시간 12:00 ~ 13:00 / 주말·공휴일 제외)
          </p>
        </div>
      </div>

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

export default Customer;
