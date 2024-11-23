import Request from "../../../Components/Request/Request";
// import OpuSir from '../../../assets/Images/OpuSir.jpg';


const Civil = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Department of Civil Engineering</h1>
            {TeacherDetails.map((teacher) => <Request key={teacher.id} data={teacher} />)}
        </div>
    );
};

const TeacherDetails = [
    { id: 5, name: "Raihan Khan Opu",status:"request", title: "Assistant Teacher and Head of Department", email: "sajidafnan91@gmail.com", image: "https://i.ibb.co.com/kD43MLG/OpuSir.jpg" },
    { id: 6, name: "Md Akhlas Uddin",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image: "https://i.ibb.co.com/dDtBq3N/Akhlas-Sir.jpg" },
    { id: 7, name: "Sohanur Rahman",status:"request", title: "Lecturer", email: "sajidafnan91@gmail.com", image: "https://i.ibb.co.com/r0CGhrK/Sohanur-Sir.jpg" },
    { id: 8, name: "Shahed Mahmud",status:"request", title: "Workshop/Laboratory Incharge", email: "sajidafnan91@gmail.com", image: "https://i.ibb.co.com/M2hknCy/Shahed-Sir.jpg" },
    { id: 9, name: "Puja Brommo", title: "Guest Lecturer", email: "sajidafnan91@gmail.com", image: "https://i.postimg.cc/D049NNGs/Mams-Photo.jpg" },
    { id: 10, name: "Faisal Ahmed",status:"request", title: "Guest Lecturer", email: "sajidafnan91@gmail.com", image: "https://i.ibb.co.com/vQvcjJR/Faisal-Sir.jpg" },
    { id: 11, name: "Anwar Hossain",status:"request", title: "Guest Lecturer", email: "sajidafnan91@gmail.com", image: "https://i.ibb.co.com/j565S2T/AnwarSir.png" }
]
export default Civil;