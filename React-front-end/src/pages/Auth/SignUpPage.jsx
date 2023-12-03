import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SnackBar from "../../components/snackBar";
import getResponseMessage from "../../utils/getResponse";
import User from "../../APIs/User";
import { LoadingButton } from "@mui/lab";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);

  const [isLoading, setLoading] = useState(false);

  async function registerNewUser(e) {
    setLoading(true);
    e.preventDefault();
    //
    const name = document.forms[0].elements.name.value,
      email = document.forms[0].elements.email.value,
      password = document.forms[0].elements.password.value,
      phone = document.forms[0].elements.phone.value,
      password_confirmation =
        document.forms[0].elements.password_confirmation.value;

    const userData = { name, email, password, phone, password_confirmation };

    const response = await User.registerUser(userData);

    setLoading(false);

    if (response.success) {
      navigate("/login");
      return;
    }
    if (response.errorLevel != 3) {
      const errorMessage = getResponseMessage(response);
      setErrorMsg(errorMessage);
      setOpen(true);
    }
  }
  return (
    <>
      <SnackBar
        message={errorMsg}
        open={open}
        severity="error"
        handleClose={() => {
          setOpen(false);
        }}
        sx={{ background: "#de222a", color: "#fff", marginBottom: "50px" }}
      />
      <div className="bg-[#d4d4d8] h-screen">
        <div className="max-w-[1320px] m-auto px-4 flex flex-col">
          <div className="px-2  justify-between w-[50%] ">
            <div className="relative max-w-[130px] h-[50px] ml-4 mt-0">
              <span>
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
            <div className=" mt-12 md:w-[60%] lg:w-[38.333%]  w-full px-4">
              <h3 className="font-bold text-3xl mb-4 text-[#2a435d]  mt-0 ">
                Sign Up
              </h3>
              <div className=" row-auto">
                <form
                  name="signup"
                  className="flex flex-col"
                  onSubmit={registerNewUser}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") registerNewUser(e);
                  }}
                >
                  <div className=" mb-4">
                    <input
                      name="name"
                      className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                      type="name"
                      placeholder="Name"
                      defaultValue="Customername"
                    />
                  </div>
                  <div className=" mb-4">
                    <input
                      name="email"
                      className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                      type="email"
                      placeholder="Email"
                      defaultValue="UserName@gmail.com"
                    />
                  </div>
                  <div className=" mb-4">
                    <input
                      name="phone"
                      className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                      type="phone"
                      placeholder="ex:+16815223402"
                      defaultValue="0624789531"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      name="password"
                      className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                      type="password"
                      placeholder="Password"
                      defaultValue="12345678"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      name="password_confirmation"
                      className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                      type="password"
                      placeholder="Confirm Password"
                      defaultValue="12345678"
                    />
                  </div>
                  <div>
                    <LoadingButton
                      sx={{
                        paddingX: "30px",
                        backgroundColor: "#0dd19d",
                        "&:hover": {
                          backgroundColor: "#0e735b",
                        },
                      }}
                      size="small"
                      onClick={registerNewUser}
                      loading={isLoading}
                      loadingPosition="center"
                      variant="contained"
                    >
                      <span>SIGN UP</span>
                    </LoadingButton>
                  </div>
                  <div className="mb-4 mt-4">
                    <p>
                      Already have an account?&nbsp;&nbsp;
                      <Link to="/login">
                        <span className="hover:text-[#f64e60]">Sing in</span>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:flex relative ">
              <img
                className="w-[90%] ml-20"
                src="https://khadyo.softtechdemo.com/assets/img/verifiy-img.png"
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
    </>
  );
};

export default SignUpPage;
