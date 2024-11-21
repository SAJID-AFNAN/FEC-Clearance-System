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
    { id: 1, name: "Md. Eklachur Rahman", title: "Associate Professor (Chemistry) & Head of Department Non-Tech", email: "sajidafnan91@gmail.com" },
    { id: 2, name: "Abdus Chatter Mia", title: "Associate Professor, Physics and Officer on Special Charge, Maushi, Dhaka", email: "sajidafnan91@gmail.com" },
    { id: 3, name: "Muhammad Yunus Ali", title: "Associate Professor, Mathematics and Officer on Special Charge, Maushi, Dhaka.", email: "sajidafnan91@gmail.com" },
    { id: 4, name: "Md Shahjamal Molya", title: "Assistant Professor (Chemistry)", email: "sajidafnan91@gmail.com" },
    { id: 5, name: "Jannatun Naeem", title: "Assistant Professor (Mathematics)", email: "sajidafnan91@gmail.com" },
    { id: 6, name: "Afia Begum", title: "Lecturer (Physics)", email: "sajidafnan91@gmail.com" },
    { id: 7, name: "Md. Fahad Hossain", title: "Lecturer (Mathematics)", email: "sajidafnan91@gmail.com" },
    { id: 8, name: "Shihab Uddin", title: "Lecturer (Chemistry)", email: "sajidafnan91@gmail.com" },
]

export default NonTech;