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
    { id: 25, name: "Md. Eklachur Rahman",status:"request", title: "Associate Professor (Chemistry) & Head of Department Non-Tech", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/P5Fr0gpV/Aklacur-Sir.jpg" },
    { id: 26, name: "Abdus Chatter Mia",status:"request", title: "Associate Professor, Physics and Officer on Special Charge, Maushi, Dhaka", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/26W6Q05c/Abdus-Sattar-Sir.jpg" },
    { id: 27, name: "Muhammad Yunus Ali",status:"request", title: "Associate Professor, Mathematics and Officer on Special Charge, Maushi, Dhaka.", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/4xnXvWL6/YunusSir.jpg" },
    { id: 28, name: "Md Shahjamal Molya",status:"request", title: "Assistant Professor (Chemistry)", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/QNkNj9KT/Shah-Jamal-Sir.jpg" },
    { id: 29, name: "Jannatun Naeem",status:"request", title: "Assistant Professor (Mathematics)", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/D049NNGs/Mams-Photo.jpg" },
    { id: 30, name: "Afia Begum",status:"request", title: "Lecturer (Physics)", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/D049NNGs/Mams-Photo.jpg" },
    { id: 31, name: "Md. Fahad Hossain",status:"request", title: "Lecturer (Mathematics)", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/fLYztkH1/Fahad-Sir-math.jpg" },
    { id: 32, name: "Shihab Uddin",status:"request", title: "Lecturer (Chemistry)", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/Ls1RwnMh/Shihab-Sir.jpg" },
]

export default NonTech;