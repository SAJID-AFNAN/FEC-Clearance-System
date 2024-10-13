import { Button } from "@material-tailwind/react";

const NonTech = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-green-300 p-4 rounded-lg text-black">Department of NonTech or General Science</h1>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Md. Eklachur Rahman</span> <br /> <span className="font-sans text-lg">Associate Professor (Chemistry) & Head of Department Non-Tech</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Abdus Chatter Mia</span> <br /> <span className="font-sans text-lg">Associate Professor, Physics and Officer on Special Charge, Maushi, Dhaka</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Muhammad Yunus Ali</span> <br /> <span className="font-sans text-lg">Associate Professor, Mathematics and Officer on Special Charge, Maushi, Dhaka.</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Md Shahjamal Molya</span> <br /> <span className="font-sans text-lg">Assistant Professor (Chemistry)</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Jannatun Naeem</span> <br /> <span className="font-sans text-lg">Assistant Professor (Mathematics)</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Afia Begum</span> <br /> <span className="font-sans text-lg">Lecturer (Physics)</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Md. Fahad Hossain</span> <br /> <span className="font-sans text-lg">Lecturer (Mathematics)</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between">
                <p><span className="text-2xl font-semibold font-serif">Shihab Uddin</span> <br /> <span className="font-sans text-lg">Lecturer (Chemistry)</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
        </div>
    );
};

export default NonTech;