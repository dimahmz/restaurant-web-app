import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../hooks/AuthContext";

const LoginPage = () => {
    const navigate = useNavigate();

    const useAuth = UseAuth();

    // error message to display to the user
    const [errorMsg, setErrorMsg] = useState(false);

    // form inputs
    const [email, setEmail] = useState("iamanadmin@example.com");
    const [password, setPassword] = useState("admin1234");
    const [rememberUser, setRemeberUser] = useState(true);

    function handleRememberUser(e) {
        setRemeberUser(e.target.checked);
    }

    async function loginUser(event) {
        event.preventDefault();
        const response = await useAuth.AuthenticateUser(
            { email, password },
            rememberUser
        );
        // authentiaction failed
        if (response.success == false) {
            if (typeof response.data === "object") {
                const errors = response.data.errors;
                Object.keys(errors).forEach((error) => {
                    setErrorMsg(errors[error][0]);
                    return;
                });
            } else setErrorMsg(response.data);
            return;
        }
        // send the user to a page depends on its role
        if (response.data.user.role_id == "3") navigate("/");
        navigate("/dashboard");
    }
    return (
        <div className="bg-[#d4d4d8] h-screen  ">
            <div className="max-w-[1320px] m-auto px-4 flex flex-col">
                <div className="px-2 justify-between w-[50%]">
                    <div className="relative max-w-[130px] h-[50px] ml-4 ">
                        <span className=" ">
                            <Link to="/">
                                <img
                                    className="w-[90px]"
                                    src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
                                    alt=""
                                />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="flex">
                    <div className=" mt-12 md:w-[60%] lg:w-[33.333%]  sm:w-full px-4">
                        <h3 className="font-bold text-3xl mb-4 text-[#2a435d]  mt-0 ">
                            Sign In
                        </h3>
                        <div className=" row-auto">
                            <div className="flex flex-col mt-28"></div>
                            {errorMsg && (
                                <h1 className="text-red-900 mb-5 text-xl">
                                    {errorMsg}
                                </h1>
                            )}
                            <form onSubmit={loginUser}>
                                <div className="px-1 mb-4">
                                    <input
                                        className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="px-1 mb-4">
                                    <input
                                        className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-1 mb-4  ">
                                        <input
                                            className="border-[#cfd5db]  border-solid bg-white cursor-pointer "
                                            type="checkbox"
                                            name="remeberUser"
                                            checked={rememberUser}
                                            onChange={handleRememberUser}
                                        />
                                        <span className=" ml-2">
                                            Remember Me
                                        </span>
                                    </div>
                                    <div className="px-2 mb-4 text-right cursor-pointer  hover:text-[#96353f]">
                                        <Link to="/reset-password">
                                            <p>Forget password?</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className=" mr-2">
                                        <button className=" cursor-pointer py-2 px-4 rounded-sm text-white bg-[#0dd19d] hover:bg-[#0e735b]">
                                            SIGN IN
                                        </button>
                                    </div>
                                    <div>
                                        <Link to="/signup">
                                            <button className="cursor-pointer py-2 px-4 rounded-sm text-white bg-[#f64e60] hover:bg-[#96353f]">
                                                SIGN UP
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=" hidden lg:flex relative w-[67%]  items-center justify-center h-full mt-24 ">
                        <img
                            className="w-[72%] ml-16"
                            src="https://khadyo.softtechdemo.com/assets/img/sign-in.png"
                            alt=""
                        />
                        <img
                            className="absolute top-0 left-28"
                            src="https://khadyo.softtechdemo.com/assets/img/obj-1.png"
                            alt=""
                        />
                        <img
                            className="absolute left-[50%] top-0"
                            src="https://khadyo.softtechdemo.com/assets/img/obj-8.png"
                            alt=""
                        />
                        <img
                            className="absolute top-[50%] left-[100px]"
                            src="https://khadyo.softtechdemo.com/assets/img/obj-9.png"
                            alt=""
                        />
                        <img
                            className="absolute bottom-[100px] left-[50%]"
                            src="https://khadyo.softtechdemo.com/assets/img/obj-7.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
