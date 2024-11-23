import { useContext, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import { Typography, Input } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import background from '../../assets/Images/WhatsApp Image 2024-11-23 at 11.33.15 AM.jpeg';

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const emailRef = useRef(null)

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                if (result.user.emailVerified) {
                    //navigate after
                    navigate('/')
                }
                else {
                    alert("Please verify  your email address")
                }
                // alert('User login Successfully')
            })
            .catch(error => {
                console.error(error);
                alert('Sorry! you are providing wrong information')
            })
    }

    // const handleResetPassword = () => {
    //     const email = emailRef.current.value
    //     if (!email) {
    //         console.log("Please Provide an email", emailRef.current.value);
    //     }
    //     resetPassword(email)
    //         .then(() => {
    //             alert('please check your email');
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    return (
        <section
            style={{ backgroundImage: `url(${background})` }}
            className="grid text-center h-screen items-center bg-cover bg-center w-full ">
            <div>
                <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
                <div className="flex w-2/5 mx-auto mb-8">
                    <Marquee pauseOnHover={true} speed={170}>
                        <span className="font-sans text-lg text-blue-gray-50">
                            ফরিদপুর ইঞ্জিনিয়ারিং কলেজ ক্লিয়ারেন্স সিস্টেম
                        </span>
                    </Marquee>
                </div>
                <div className="w-[35%] mx-auto bg-white bg-opacity-70 backdrop-blur-md px-10 py-8 rounded-xl shadow-lg">
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Sign In
                    </Typography>
                    <Typography className="mb-10 text-gray-600 font-normal text-[18px]">
                        Enter your email and password to sign in
                    </Typography>
                    <form onSubmit={handleSignIn} className="mx-auto max-w-[24rem] text-left">
                        <div className="mb-6">
                            <Input
                                id="email"
                                color="black"
                                size="lg"
                                type="email"
                                name="email"
                                label="Email"
                                ref={emailRef}
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                id="password"
                                color="black"
                                size="lg"
                                name="password"
                                type={passwordShown ? "text" : "password"}
                                label="Password"
                                icon={
                                    <i onClick={togglePasswordVisiblity}>
                                        {passwordShown ? (
                                            <EyeIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeSlashIcon className="h-5 w-5" />
                                        )}
                                    </i>
                                }
                            />
                        </div>
                        <input
                            type="submit"
                            value="SUBMIT"
                            className="btn btn-neutral mt-6 w-full"
                        />
                        <div className="!mt-4 flex justify-center">
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                variant="small"
                                className="font-medium"
                            >
                                <a href="#" className="link link-hover">
                                    Forgot password?
                                </a>
                            </Typography>
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="!mt-4 text-center font-normal"
                        >
                            Not registered?{" "}
                            <NavLink
                                to="/signup"
                                className="font-medium text-gray-900 hover:underline"
                            >
                                Create Account
                            </NavLink>
                        </Typography>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default SignIn;