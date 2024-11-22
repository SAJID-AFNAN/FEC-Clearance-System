import Request from "../../../Components/Request/Request";

const Eee = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Department of Electrical and Electronics Engineering</h1>
            {TeacherDetails.map((teacher) => <Request key={teacher.id} data={teacher} />)}
        </div>
    );
};

const TeacherDetails = [
    { id: 17, name: "Sanwar Hosen", title: "Assistant Teacher and Head of Department", email: "sajidafnan91@gmail.com" },
    { id: 18, name: "Md Zillur Rahman", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 19, name: "Partho Mandol", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 20, name: "Apurbo Biswas", title: "Lecturer", email: "sajidafnan91@gmail.com" },
    { id: 21, name: "Md Fahad Hosen", title: "Guest Lecturer", email: "sajidafnan91@gmail.com" }
]

export default Eee;