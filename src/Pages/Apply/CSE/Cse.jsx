import Request from "../../../Components/Request/Request";

const Cse = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Department of Computer Science and Engineering</h1>
            {TeacherDetails.map((teacher) => <Request key={teacher.id} data={teacher} />)}
        </div>
    );
};
const TeacherDetails = [
    { id: 11, name: "Shamsul Islam", title: "Assistant Teacher and Head of Department", email: "sajidafnan91@gmail.com" },
    { id: 12, name: "Md Tuhin Reza", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 13, name: "Md Rasel Ahmed", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 14, name: "Md Suman Reza", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 15, name: "Samia Akter", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 16, name: "Md Rany Ahmed", title: "Guest Lecturer", email: "sajidafnan91@gmail.com" }
]
export default Cse;
