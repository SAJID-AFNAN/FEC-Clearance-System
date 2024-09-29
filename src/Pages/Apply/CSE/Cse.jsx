import { Button } from "@material-tailwind/react";

const Cse = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-light-green-400 p-4 rounded-lg text-black">Department of Computer Science and Engineering</h1>
            <div className="border-2 border-black rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Shamsul Islam</span> <br /> <span className="font-sans text-lg">Assistant Teacher and Head of Department</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2 border-black rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Tuhin Reza</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2 border-black rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Rasel Ahmed</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2 border-black rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Suman Reza</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2 border-black rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Samia Akter</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2 border-black rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Rany Ahmed</span> <br /> <span className="font-sans text-lg">Guest Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
        </div>
    );
};

export default Cse;