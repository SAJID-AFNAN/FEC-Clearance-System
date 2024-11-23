import {
    Button,
} from "@material-tailwind/react";
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { saveJobApplication } from "../../Utility/LocalStorage"

const Request = ({ data }) => {
    const [userData, setUserData] = useState({});
    const [status, setStatus] = useState("request")
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const { email } = data;

    // const handleBtn = () => {
    //     const storedId = getStoredJobApplication()

    //     // let appliedJob = [];
    //     for (const id of storedId) {
    //         const job = data.find(job => job.id === id)
    //         if (job) {
    //             // appliedJob.push(job)
    //             return job
    //         }
    //     }
    // }
    // console.log(handleBtn);


    useEffect(() => {
        if (user?.email) {
            fetch(`https://fec-clearance-server.onrender.com/student/${user.email}`)
                .then(res => res.json())
                .then(data => setUserData(data))
                .catch(err => console.error('Error fetching user data:', err));
        }
    }, [user?.email]);
    console.log(user);
    // const frontend_url = "https://alumni-clearance.web.app"
    // const frontend_url = "http://localhost:5173";

    const handleRequest = () => {
        const verificationLink = `${"http://localhost:5173"}/verification?email=${userData?.email}`;
        const templateParams = {
            from_name: user?.displayName || "User",
            notes: 'Check this out!',
            reg: userData?.reg || "N/A",
            to_email: email || "sajidafnan91@gmail.com",
            from_email: user?.email || "unknown@example.com",
            verification_link: verificationLink,
        };

        if (userData?.reg) {
            swal({
                title: "Are you sure?",
                text: "Are you sure you want to send a request for clearance?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willSend) => {
                if (willSend) {
                    emailjs.send(
                        import.meta.env.VITE_SERVICE_KEY,
                        import.meta.env.VITE_TEMP_KEY,
                        templateParams,
                        import.meta.env.VITE_PUBLIC_KEY
                    ).then(
                        (response) => {
                            console.log('SUCCESS!', response.status, response.text);
                            swal("Your request has been sent successfully!", {
                                icon: "success",
                            });
                            saveJobApplication(data.id);
                            setStatus("pending")
                        },
                        (error) => {
                            console.error('FAILED...', error);
                            swal("Something went wrong. Please try again later.", {
                                icon: "error",
                            });
                        }
                    );
                }
            });
        } else {
            swal({
                title: "Incomplete Info",
                text: "Please complete your profile before sending a request.",
                icon: "info",
            });
            navigate('/profile');
        }
    };

    return (
        <div className="border-b-2 border-blue-gray-200 py-3 px-6 flex justify-between my-4">
            <div className="flex items-center gap-3">
                <div>
                    <img className="w-16 h-16 rounded-lg" src={data?.image || "/placeholder.png"} alt="Profile" />
                </div>
                <p>
                    <span className="text-2xl font-semibold font-serif">{data?.name}</span>
                    <br />
                    <span className="font-sans text-lg">{data?.title}</span>
                </p>
            </div>

            {status === "pending" ? (
                <Button className="btn bg-white text-black">Pending...</Button>
            ) : (
                <Button onClick={handleRequest} className="btn hover:text-black">Request</Button>
            )}
        </div>
    );
};

export default Request;
