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
    { id: 20, name: "Sanwar Hosen",status:"request", title: "Assistant Teacher and Head of Department", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/0j1TLf0B/Sanwar-Sir.jpg" },
    { id: 21, name: "Md Zillur Rahman",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/FzbMmLPs/Zillur-Sir.jpg" },
    { id: 22, name: "Partho Mandol",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/65tscM37/Partho-Sir.jpg" },
    { id: 23, name: "Apurbo Biswas",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/T2mGCyJs/Opurbo-Sir.jpg" },
    { id: 24, name: "Md Fahad Hosen",status:"request", title: "Guest Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/ZqMZDpQG/FahadSir.jpg" }
]

export default Eee;