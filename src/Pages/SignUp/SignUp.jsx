import { useContext, useState } from "react";

import { Typography, Input } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);


        if (password.length < 6) {
            alert('password should be 6 character or longer')
            return;
        }

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                alert('User Created Successfully')

                //send verification 
                sendEmailVerification(result.user)
                    .then(() => {
                        alert("Please check your email and verify")
                    })
            })
            .catch(error => {
                console.error(error);
                alert("opps! Something went wrong.Try again")
            })
    }

    return (
        <section className="grid text-center h-screen items-center p-8">
            <div className="border border-black bg-[#d9dde1] w-[35%] mx-auto px-10 py-8 rounded-xl">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Create Account
                </Typography>
                <Typography className="mb-10 text-gray-600 font-normal text-[18px]">
                    Enter your Informaiton to Create Account
                </Typography>
                <form onSubmit={handleRegister} className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-8">
                        <Input
                            id="name"
                            color="gray"
                            size="lg"
                            type="text"
                            name="name"
                            required
                            label="Name"
                            className="h-5 w-5"
                        />
                    </div>
                    <div className="mb-8">
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            required
                            label="Email"
                            className="h-5 w-5"
                        />
                    </div>
                    <div className="mb-6">

                        <Input
                            size="lg"
                            name="password"
                            label="Password"
                            required
                            className="h-5 w-5"
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
                    <Typography
                        variant="small"
                        color="gray"
                        className="!mt-4 text-center font-normal"
                    >
                        Already have an account?{" "}
                        <NavLink to="/signin" className="font-medium text-gray-900 hover:underline">Sign In</NavLink>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

export default SignUp;