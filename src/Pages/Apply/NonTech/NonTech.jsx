import Request from "../../../Components/Request/Request";

const NonTech = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Department of Non-Technical</h1>
            {TeacherDetails.map((teacher) => <Request key={teacher.id} data={teacher} />)}
        </div>
    );
};

const TeacherDetails = [
    { id: 22, name: "Md. Eklachur Rahman", title: "Associate Professor (Chemistry) & Head of Department Non-Tech", email: "sajidafnan91@gmail.com" },
    { id: 23, name: "Abdus Chatter Mia", title: "Associate Professor, Physics and Officer on Special Charge, Maushi, Dhaka", email: "sajidafnan91@gmail.com" },
    { id: 24, name: "Muhammad Yunus Ali", title: "Associate Professor, Mathematics and Officer on Special Charge, Maushi, Dhaka.", email: "sajidafnan91@gmail.com" },
    { id: 25, name: "Md Shahjamal Molya", title: "Assistant Professor (Chemistry)", email: "sajidafnan91@gmail.com" },
    { id: 26, name: "Jannatun Naeem", title: "Assistant Professor (Mathematics)", email: "sajidafnan91@gmail.com" },
    { id: 27, name: "Afia Begum", title: "Lecturer (Physics)", email: "sajidafnan91@gmail.com" },
    { id: 28, name: "Md. Fahad Hossain", title: "Lecturer (Mathematics)", email: "sajidafnan91@gmail.com" },
    { id: 29, name: "Shihab Uddin", title: "Lecturer (Chemistry)", email: "sajidafnan91@gmail.com" },
]

export default NonTech;