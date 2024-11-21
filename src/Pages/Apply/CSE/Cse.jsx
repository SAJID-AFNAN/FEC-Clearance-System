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
    { id: 1, name: "Shamsul Islam", title: "Assistant Teacher and Head of Department", email: "sajidafnan91@gmail.com" },
    { id: 2, name: "Md Tuhin Reza", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 3, name: "Md Rasel Ahmed", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 4, name: "Md Suman Reza", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 5, name: "Samia Akter", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 6, name: "Md Rany Ahmed", title: "Guest Lecturer", email: "sajidafnan91@gmail.com" }
]
export default Cse;
