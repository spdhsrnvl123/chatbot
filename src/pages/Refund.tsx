function Refund() {
  return (
    <div className="h-screen bg-gray-100 overflow-y-auto p-4 space-y-4">
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
  );
}

export default Refund;
