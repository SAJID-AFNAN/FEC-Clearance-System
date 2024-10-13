import { Button } from "@material-tailwind/react";
const Academic = () => {
    return (
        <div>
            <h1 className="text-center text-xl bg-purple-200 p-4 rounded-lg text-black">Academic</h1>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md. Rakibul Islam</span> <br /> <span className="font-sans text-lg">Programmer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md. Rafiqul Islam</span> <br /> <span className="font-sans text-lg">Librarian</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between items-center">
                <p><span className="text-2xl font-semibold font-serif">Md. Eklachur Rahman</span> <br /> <span className="font-sans text-lg">Associate Professor (Chemistry) & Head of Department Non-Tech <br />Professor,South Hall</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between items-center my-4">
                <p><span className="text-2xl font-semibold font-serif">Raihan Khan Opu</span> <br /> <span className="font-sans text-lg">Assistant Teacher and Head of Department <br />Professor, North Hall</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
        </div>
    );
};

export default Academic;