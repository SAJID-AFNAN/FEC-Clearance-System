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
    { id: 12, name: "Professor Md. Alamgir Hossain",status:"request", title: "Professor & Principal of FEC", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/SNF9vMFY/Alamgir-Sir.png" },
    { id: 13, name: "Shamsul Islam",status:"request", title: "Assistant Professor and Head of CSE Department", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/4d0dtrZh/Samsul-Sir.jpg" },
    { id: 14, name: "Khalil Uddin",status:"request", title: "Associate Teacher", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/g2K3Rk7X/khalil-Sir.jpg" },
    { id: 15, name: "Md Tuhin Reza",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/KcsLrHQf/TuhinSir.jpg" },
    { id: 16, name: "Md Rasel Ahmed",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/KvBPG5r5/RaselSir.jpg" },
    { id: 17, name: "Md Suman Reza",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/63p2CrvF/SumanSir.jpg" },
    { id: 18, name: "Samia Akter",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/D049NNGs/Mams-Photo.jpg" },
    { id: 19, name: "Md Rany Ahmed",status:"request", title: "Guest Lecturer", email: "sajidafnan91@gmail.com", image:"https://i.postimg.cc/F15HC3Yr/RonySir.jpg" }
]
export default Cse;
