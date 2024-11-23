import { useEffect, useState } from "react";

const AllVerifiedStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://fec-clearance-server.onrender.com/students/verified")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching verified students:", error));
  }, []);

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Verification Status</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Batch</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Session</th>
              <th className="py-3 px-4 text-left">Registration No.</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Signature</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student._id} className="border-t">
                  <td className="py-2 px-4">{student.name}</td>
                  <td className="py-2 px-4">{student.batch}</td>
                  <td className="py-2 px-4">{student.dept}</td>
                  <td className="py-2 px-4">{student.session}</td>
                  <td className="py-2 px-4">{student.reg}</td>
                  <td className="py-2 px-4">{student.phone}</td>
                  <td className="py-2 px-4">
                    <img
                      src={student.signature}
                      alt="Signature"
                      className="w-24 h-12 border rounded"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No verified students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllVerifiedStudents;
