import Request from "../../../Components/Request/Request";
const Academic = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Academic</h1>
            {TeacherDetails.map((teacher) => <Request key={teacher.id} data={teacher} />)}
        </div>
    );
};
const TeacherDetails = [
    { id: 1, name: "Md. Rakibul Islam", title: "Programmer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/1tz0ynyc/Unknown.webp" },
    { id: 2, name: "Md. Rafiqul Islam", title: "Librarian", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/1tz0ynyc/Unknown.webp" },
    { id: 3, name: "Md. Eklachur Rahman", title: "Associate Professor (Chemistry) & Head of Department Non-Tech,Professor,South Hall", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/P5Fr0gpV/Aklacur-Sir.jpg" },
    { id: 4, name: "Raihan Khan Opu", title: "Assistant Teacher and Head of Department,Professor, North Hall", email: "sajidafnan91@gmail.com", image:"https://i.ibb.co.com/kD43MLG/OpuSir.jpg" }
]

export default Academic;