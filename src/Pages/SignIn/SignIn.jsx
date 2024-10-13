import { useContext, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import { Typography, Input } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

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
        <section className="grid text-center h-screen items-center">
            <div>
                <div className="flex w-3/5 mx-auto mb-8">
                    <button className="bg-red-800 text-white px-5 py-3 rounded-md font-sans">Notice</button>
                    <Marquee pauseOnHover={true} speed={170}>
                        <span className="font-sans text-lg">I can be a React component, multiple React components, or just some text.
                        </span>
                    </Marquee>
                </div>
                <div className="w-[35%] mx-auto bg-[#d9dde1] px-10 py-8 rounded-xl">
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
                                color="gray"
                                size="lg"
                                type="email"
                                name="email"
                                className="h-5 w-5"
                                label="Email"
                                ref={emailRef}
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                id="email"
                                color="gray"
                                className="h-5 w-5"
                                label="Password"
                                size="lg"
                                name="password"
                                type={passwordShown ? "text" : "password"}
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
                        <input type="submit" value="SUBMIT" color="gray" size="lg" className="btn btn-neutral mt-6 w-full" />
                        <div className="!mt-4 flex justify-center">
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                variant="small"
                                className="font-medium"
                            >
                                <a href="#" className="link link-hover">Forgot password?</a>
                                {/* <span onClick={handleResetPassword} className="hover:underline">Forgot password</span> */}
                            </Typography>
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="!mt-4 text-center font-normal"
                        >
                            Not registered?{" "}
                            <NavLink to="/signup" className="font-medium text-gray-900 hover:underline">Create Account</NavLink>
                        </Typography>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignIn;