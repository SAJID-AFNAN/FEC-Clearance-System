import Request from "../../../Components/Request/Request";


const Civil = () => {

    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Department of Civil Engineering</h1>
            {TeacherDetails.map((teacher)=><Request key={teacher.id} data={teacher}/>)}
        </div>
    );
};

const TeacherDetails = [
    { id: 5, name: "Professor Md. Alamgir Hossain", title: "Professor", email: "sajidafnan91@gmail.com" },
    { id: 6, name: "Raihan Khan Opu", title: "Assistant Teacher and Head of Department", email: "sajidafnan91@gmail.com" },
    { id: 7, name: "Md Akhlas Uddin", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 8, name: "Sohanur Rahman", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 9, name: "Shahed Mahmud", title: "Workshop/Laboratory Incharge", email: "sajidafnan91@gmail.com" },
    { id: 10, name: "Puja Brommo", title: "Guest Lecturer", email: "sajidafnan91@gmail.com" }
]
export default Civil;