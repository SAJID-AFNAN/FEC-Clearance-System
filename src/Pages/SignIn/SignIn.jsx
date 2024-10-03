import { useState } from "react";
import Marquee from "react-fast-marquee";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    return (
        <section className="grid text-center h-screen items-center">
            <div>
                <div className="flex w-3/5 mx-auto mb-16">
                    <button className="bg-red-800 text-white px-5 py-3 rounded-md font-sans">Notice</button>
                    <Marquee pauseOnHover={true} speed={170}>
                        <span className="font-sans text-lg">I can be a React component, multiple React components, or just some text.
                        </span>
                    </Marquee>
                </div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Sign In
                </Typography>
                <Typography className="mb-10 text-gray-600 font-normal text-[18px]">
                    Enter your email and password to sign in
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Email
                            </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Password
                            </Typography>
                        </label>
                        <Input
                            size="lg"
                            placeholder="********"
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
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
                    <Button color="gray" size="lg" className="mt-6" fullWidth>
                        Sign In
                    </Button>
                    <div className="!mt-4 flex justify-center">
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            variant="small"
                            className="font-medium"
                        >
                            Forgot password
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="!mt-4 text-center font-normal"
                    >
                        Not registered?{" "}
                        <NavLink to="/signup" className="font-medium text-gray-900">Create Account</NavLink>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

export default SignIn;