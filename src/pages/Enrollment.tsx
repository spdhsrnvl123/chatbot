function Enrollment() {
  return (
    <div className="h-screen bg-gray-100 overflow-y-auto p-4 space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <span className="bg-[#34bf87] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">
            1
          </span>
          <h3 className="font-bold">회원가입</h3>
        </div>
        <p className="text-gray-600 text-sm ml-9">
          홈페이지에서 회원가입을 진행합니다.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <span className="bg-[#34bf87] text-white w-6 h-6 rounded-full flex items-center justify-content text-sm mr-3">
            2
          </span>
          <h3 className="font-bold">교육과정 선택</h3>
        </div>
        <p className="text-gray-600 text-sm ml-9">
          원하는 교육과정을 선택합니다.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <span className="bg-[#34bf87] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">
            3
          </span>
          <h3 className="font-bold">수강신청 및 결제</h3>
        </div>
        <p className="text-gray-600 text-sm ml-9">
          수강신청 후 결제를 완료합니다.
        </p>
      </div>
    </div>
  );
}

export default Enrollment;
