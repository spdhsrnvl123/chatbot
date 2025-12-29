function Course() {
  return (
    <div className="h-screen bg-gray-100 overflow-y-auto p-4 space-y-4">
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
  );
}

export default Course;
