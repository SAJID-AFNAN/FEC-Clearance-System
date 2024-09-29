import { Button } from "@material-tailwind/react";

const Eee = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-cyan-400 p-4 rounded-lg text-black">Department of Electrical and Electronics Engineering</h1>
            <div className="border-2 rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Sanwar Hosen</span> <br /> <span className="font-sans text-lg">Assistant Teacher and Head of Department</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Zillur Rahman</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Partho Mandol</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Apurbo Biswas</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Fahad Hosen</span> <br /> <span className="font-sans text-lg">Guest Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
        </div>
    );
};

export default Eee;