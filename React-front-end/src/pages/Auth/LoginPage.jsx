import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../../context/AuthContext";
import SnackBar from "../../components/snackBar";
import getResponseMessage from "../../utils/getResponse";
import { Button } from "@mui/material";
import { Checkbox } from "@material-tailwind/react";
import { LoadingButton } from "@mui/lab";

const LoginPage = () => {
  const navigate = useNavigate();

  const useAuth = UseAuth();

  //error message to display to the user
  const [errorMsg, setErrorMsg] = useState(false);
  const [open, setOpen] = useState(false);

  // form inputs
  const [email, setEmail] = useState("admin@email.com");
  const [password, setPassword] = useState("admin1234");
  const [rememberUser, setRemeberUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function handleRememberUser(e) {
    setRemeberUser(e.target.checked);
  }

  async function loginUser(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = await useAuth.AuthenticateUser(
      { email, password },
      rememberUser
    );

    setIsLoading(false);
    // authentiaction failed
    if (response.success == false) {
      if (response.errorLevel != 3) {
        const message = getResponseMessage(response);
        setErrorMsg(message);
        setOpen(true);
      }
      return;
    }
    // send the user to a page depends on its role
    if (response.payload.user.role_id == "5") navigate("/");
    else navigate("/dashboard/pos");
  }
  return (
    <main className="w-full h-full">
      <SnackBar
        message={errorMsg}
        open={open}
        severity="error"
        handleClose={() => {
          setOpen(false);
        }}
        sx={{ background: "#de222a", color: "#fff", marginBottom: "50px" }}
      />
      <header className="ml-16">
        <Link to="/">
          <img
            className="w-[90px]"
            src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
            alt=""
          />
        </Link>
      </header>
      <section className="flex space-y-5 maw-w-[1000px] px-4">
        <div className="w-full max-w-[450px] flex-column space-y-12 pl-8 mt-16">
          <h3 className="font-bold text-3xl text-[#2a435d] ml-8">Sign In</h3>
          <form
            onSubmit={loginUser}
            onKeyDown={(e) => {
              if (e.key === "Enter") loginUser(e);
            }}
            className="flex-column space-y-5"
          >
            <input
              className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="flex space-x-4">
              <LoadingButton
                sx={{
                  paddingX: "30px",
                  backgroundColor: "#0dd19d",
                  "&:hover": {
                    backgroundColor: "#0e735b",
                  },
                }}
                size="small"
                onClick={loginUser}
                loading={isLoading}
                loadingPosition="center"
                variant="contained"
              >
                <span>log in</span>
              </LoadingButton>
              <Link to="/signup">
                <Button
                  variant="contained"
                  sx={{
                    paddingX: "30px",
                    backgroundColor: "#f64e60",
                    "&:hover": {
                      backgroundColor: "#96353f",
                    },
                  }}
                >
                  Sing up
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Checkbox
                  className="h-4 w-4"
                  color="pink"
                  onChange={handleRememberUser}
                  defaultChecked
                />
                <label className="inline-block cursor-pointer">
                  Remember Me
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden md:flex-center relative h-full w-full">
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
      </section>
    </main>
  );
};

export default LoginPage;
