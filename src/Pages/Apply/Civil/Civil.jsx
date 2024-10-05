import { useState } from "react";
import swal from 'sweetalert';

import {
    Button,
    // Dialog,
    // DialogBody,
    // DialogFooter,
} from "@material-tailwind/react";

const Civil = () => {
    const [Request, SetRequest] = useState(true)

    const handleRequest = () => {

        if (Request) {
            swal({
                title: "Are you sure?",
                text: "Are you sure to sent a request for getting clearance?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Your request is sent successfully", {
                            icon: "success",

                        });
                        SetRequest(!Request)
                    }
                });
        }
        else {
            swal({
                title: "Are you sure?",
                text: "Are you sure to cancel the request right now?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Your request is sent successfully", {
                            icon: "success",

                        });
                        SetRequest(!Request)
                    }
                });
        }
    }

    return (
        <div>
            <h1 className="text-center text-xl bg-indigo-200 p-4 rounded-lg text-black">Department of Civil Engineering</h1>
            <div className="border-2 rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Professor Dr. Md Mizanur Rahman</span> <br /> <span className="font-sans text-lg">Professor</span></p>
                <Button onClick={handleRequest} className="btn hover:text-black">{Request ? 'Request' : 'Pending...'}</Button>
            </div>
            <div className="border-2 rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Raihan Khan Opu</span> <br /> <span className="font-sans text-lg">Assistant Teacher and Head of Department</span></p>
                <Button onClick={handleRequest} className="btn hover:text-black">{Request ? 'Request' : 'Pending...'}</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Md Akhlas Uddin</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button onClick={handleRequest} className="btn hover:text-black">{Request ? 'Request' : 'Pending...'}</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Sohanur Rahman</span> <br /> <span className="font-sans text-lg">Lecturer</span></p>
                <Button onClick={handleRequest} className="btn hover:text-black">{Request ? 'Request' : 'Pending...'}</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Shahed Mahmud</span> <br /> <span className="font-sans text-lg">Workshop/Laboratory Incharge</span></p>
                <Button onClick={handleRequest} className="btn hover:text-black">{Request ? 'Request' : 'Pending...'}</Button>
            </div>
            <div className="border-2  rounded-xl py-3 px-6  flex justify-between my-4">
                <p><span className="text-2xl font-semibold font-serif">Puja Brommo</span> <br /> <span className="font-sans text-lg">Guest Lecturer</span></p>
                <Button onClick={handleRequest} className="btn hover:text-black">{Request ? 'Request' : 'Pending...'}</Button>
            </div>
        </div>
    );
};

export default Civil;