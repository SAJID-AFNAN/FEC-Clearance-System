import { useEffect, useState } from "react";

const Teacher = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Fetch data from local JSON file
    fetch("teacher.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teacher data:", error));
  }, []);

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
              <th className="py-3 px-4 text-left">Teacher ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Signature</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <tr key={teacher._id} className="border-t">
                  <td className="py-2 px-4">{teacher.id}</td>
                  <td className="py-2 px-4">{teacher.name}</td>
                  <td className="py-2 px-4">{teacher.department}</td>
                  {/* students.map((student) =>{
                    <td className="py-2 px-4">
                      <img
                        src={student.signature}
                        alt="Signature"
                        className="w-24 h-12 border rounded"
                      />
                    </td>
                  }) */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No verification found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teacher;
