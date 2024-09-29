import { useState } from "react";

import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Civil = () => {
    const [Request, SetRequest] = useState(false)

    const handleRequest = () => {
        SetRequest(!Request)
    }

    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Department of Civil Engineering</h1>
            <div className="border-2 rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Professor Dr. Md Mizanur Rahman</span> <br /> <span className="font-sans text-lg">Professor</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2 rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Raihan Khan Opu</span> <br /> <span className="font-sans text-lg">Assistant Teacher and Head of Department</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Akhlas Uddin</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Sohanur Rahman</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Shahed Mahmud</span> <br /> <span className="font-sans text-lg">Workshop/Laboratory Incharge</span></p>
                <Button className="btn hover:text-black">Request</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Puja Brommo</span> <br /> <span className="font-sans text-lg">Guest Lecturer</span></p>
                <Button onClick={handleRequest} className="btn hover:text-black">{Request ? 'Pending...' : 'Request'}</Button>
                <Dialog
                    open={Request}
                    handler={handleRequest}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}>

                    <DialogBody className="text-4xl text-center">
                        Are you sure to sent a request ?
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleRequest}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={handleRequest}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
        </div>
    );
};

export default Civil;