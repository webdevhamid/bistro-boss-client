import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const { handleGoogleSignIn, createUser, updateUserProfile } = useContext(AuthContext);
  // Initial input type
  const [inputType, setInputType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { name, email, password } = data;
      console.log(name, email, password);

      // Create a new user
      const { user } = await createUser(email, password);

      if (user !== null) {
        updateUserProfile(name)
          .then(() => {
            Swal.fire({
              title: "Success",
              text: "Account created successfully!",
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      }
    } catch (err) {
      const errMessage = err.message;

      Swal.fire({
        title: "Error",
        text: errMessage,
        icon: "warning",
      });
    }
  };

  // Password input type handler
  const handleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.userName.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   // Register new user
  //   const { user } = await createUser(email, password);
  //   if (user?.email) {
  //     updateProfile(user, {
  //       displayName: name,
  //     });
  //     toast.success("Account created successfully!");
  //   } else {
  //     toast.error("Something went wrong!");
  //   }
  // };

  const handleGoogle = async () => {
    const { user } = await handleGoogleSignIn();
    if (user?.email) {
      toast.success("Logged in successfully!");
    }
  };

  return (
    <>
      <title>Bistro Boss Restaurant | Register</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center w-sm">
            <h1 className="text-4xl font-bold">Sign Up</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Full name is required",
                    })}
                  />
                  {/* Error message for validation*/}
                  {errors.name?.type === "required" && (
                    <span className="text-error font-semibold">{errors?.name?.message}</span>
                  )}

                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    {...register("email", {
                      required: "Email is required!",
                    })}
                    name="email"
                    placeholder="Email"
                  />

                  {/* Error message for validation*/}
                  {errors.email?.type === "required" && (
                    <span className="text-error font-semibold">{errors?.email?.message}</span>
                  )}

                  <label className="label">Password</label>
                  <div className="flex items-center gap-3">
                    <div className="relative w-full">
                      <input
                        type={inputType}
                        className="input"
                        name="password"
                        {...register("password", {
                          required: "Password is required!",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long!",
                          },
                          maxLength: {
                            value: 20,
                            message: "Password cannot exceed more than 20 characters.",
                          },
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                            message:
                              "Password must have one lowercase letter, one  uppercase letter, one number and one special character",
                          },
                        })}
                        placeholder="Password"
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
                  {/*  Error message for password 'minLength' validation */}
                  {errors.password?.type === "minLength" && (
                    <span className="text-error font-semibold">{errors?.password?.message}</span>
                  )}
                  {/*  Error message for password 'maxLength' validation */}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-error font-semibold">{errors?.password?.message}</span>
                  )}
                  {/*  Error message for password 'pattern' validation */}
                  {errors.password?.type === "pattern" && (
                    <span className="text-error font-semibold">{errors?.password?.message}</span>
                  )}
                  {/* Submit button */}
                  <button className="btn btn-neutral mt-4" type="submit">
                    Sign Up
                  </button>
                </fieldset>
              </form>
              {/* SignIn Providers */}
              <div className="flex items-center justify-center gap-3 overflow-hidden">
                <button
                  className="btn w-full bg-white text-black border-[#e5e5e5]"
                  onClick={handleGoogle}
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                {/* GitHub */}
                {/* <button className="btn bg-black text-white border-black">
                <svg
                  aria-label="GitHub logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  ></path>
                </svg>
                Login with GitHub
              </button> */}
              </div>
              {/* Already Registered? */}
              <div className="text-center">
                <p>
                  Already registered?{" "}
                  <b>
                    <Link to="/auth/login">Go to login</Link>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
