import { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "./../../providers/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [captchaText, setCaptchaText] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const { handleGoogleSignIn, signInUser } = useContext(AuthContext);
  // Initial input type
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.pathname ? location.state?.pathname : "/";

  // Login handler
  const onSubmit = async (data) => {
    try {
      const { email, password, captcha } = data;
      console.log(email, password, captcha);

      // sing-in user
      const { user } = await signInUser(email, password);
      console.log(user);
      if (user !== null) {
        toast.success("Logged in successfully!");

        // Navigate the user to the desired route
        navigate(from, { replace: true });
      }
    } catch (err) {
      const errMessage = err.message;
      console.log(err.code);

      Swal.fire({
        title: "Warning",
        text: errMessage,
        icon: "warning",
      });
    }
  };

  // Password input type handler
  const handleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  // logoutUser();
  // const handleVerifyEmail = async () => {
  //   const result = await verifyEmail();
  //   console.log("Email verification sent!", result);
  // };

  // Event Handler
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const captcha = form.captcha.value;
  //   console.log(email, password);

  //   console.log(captcha);
  //   // Validate captcha
  //   if (validateCaptcha(captcha, true) === true) {
  //     const { user } = await signInUser(email, password);
  //     if (user?.email) {
  //       toast.success("Logged in successfully!");
  //     }
  //   } else {
  //     toast.error("Captcha mismatched!");
  //   }
  // };

  // Captcha texts
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  useEffect(() => {
    if (validateCaptcha(captchaText, false)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [captchaText]);

  return (
    <>
      <title>Bistro Boss Restaurant | Login</title>
      <div className="hero min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="font-bold flex justify-center text-3xl mt-5 items-center">Login</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  {...register("email", { required: true })}
                />
                {/* Error message for email validation*/}
                {errors.email && <span className="text-error">This field is required</span>}

                <label className="label">Password</label>
                <div className="flex items-center gap-3">
                  <div className="relative w-full">
                    <input
                      type={inputType}
                      name="password"
                      className="input relative"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                  </div>
                  {/* Show password checkbox */}
                  <div className="absolute right-12">
                    <span className="cursor-pointer text-xl" onClick={handleInputType}>
                      {inputType === "password" ? <FaEyeSlash /> : <FaRegEye />}
                    </span>
                  </div>
                </div>
                {/* Error message for 'password field' validation*/}
                {errors.password?.type === "required" && (
                  <span className="text-error font-semibold">{errors?.password?.message}</span>
                )}

                {/* Captcha */}
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  className="input font-sans"
                  placeholder="Write the captcha text"
                  onChange={(e) => setCaptchaText(e.target.value)}
                />

                {/* Submit button */}
                <input
                  type="submit"
                  className="btn btn-neutral mt-4"
                  value="Login"
                  disabled={isDisable}
                />
              </fieldset>
            </form>
            <div className="divider h-0">OR</div>
            {/* SignIn Providers */}

            <SocialLogin />
            {/* Already Registered? */}
            <div className="mt-3">
              <p className="text-center">
                New here?{" "}
                <b>
                  <Link to="/auth/register">Create a new account</Link>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
