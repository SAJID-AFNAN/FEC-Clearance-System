import {
    Button,
} from "@material-tailwind/react";
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Request = ({ data }) => {
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/student/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    const { email } = data;
    const { user } = useContext(AuthContext)

    const handleRequest = () => {
        var templateParams = {
            from_name: user?.name,
            notes: 'Check this out!',
            reg: userData?.reg,
            to_email: email || "sajidafnan91@gmail.com",
            from_email: "tuhin@gmail.com",
        };

        if (userData?.reg) {
            swal({
                title: "Are you sure?",
                text: "Are you sure to sent a request for getting clearance?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        emailjs.send(import.meta.env.VITE_SERVICE_KEY,import.meta.env.VITE_TEMP_KEY,
                            templateParams, {
                            publicKey: import.meta.env.VITE_PUBLIC_KEY,
                            // privateKey: 'import.meta.env.VITE_PRIVATE_KEY',
                        }).then(
                            (response) => {
                                console.log('SUCCESS!', response.status, response.text);
                                swal("Your request is sent successfully", {
                                    icon: "success",
                                });
                            },
                            (error) => {
                                console.log('FAILED...', error);
                            },
                        );
                    }
                });

        } else {
            alert("Please fill up your info");
            navigate('/profile');
        }
    }



    return (
        <div className="border-b-2 border-blue-gray-200 py-3 px-6  flex justify-between my-4">
            <p><span className="text-2xl font-semibold font-serif">{data?.name}</span> <br /> <span className="font-sans text-lg">{data.title}</span></p>
            <Button onClick={handleRequest} className="btn hover:text-black">Request</Button>
        </div>
    );
};

export default Request;