import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { handleGoogleSignIn, createUser, updateUserProfile, logoutUser } = useContext(AuthContext);
  // Initial input type
  const [inputType, setInputType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    try {
      const { name, email, password, photoURL } = data;
      console.log(name, email, password);

      // Create a new user
      const { user } = await createUser(email, password);

      if (user !== null) {
        // Update user name and photo url
        await updateUserProfile(name, photoURL);

        // Save user data to the database
        const userData = {
          name,
          email,
          photoURL,
          role: "user",
        };

        const { data } = await axiosPublic.post("/users", userData);
        console.log(data);

        if (data.acknowledged) {
          // Reset register form
          reset();

          // Display success message
          Swal.fire({
            title: "Success",
            text: "Account created successfully! Please login to your account.",
            icon: "success",
          });

          // logout user
          await logoutUser();

          // Redirect user to the home page
          navigate("/auth/login", { replace: true });
        }
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

                  <label className="label">Photo URL</label>
                  <input
                    type="url"
                    className="input"
                    placeholder="Photo URL"
                    {...register("photoURL", {
                      required: "Photo URL is required",
                    })}
                  />
                  {/* Error message for validation*/}
                  {errors.photoURL?.type === "required" && (
                    <span className="text-error font-semibold">{errors?.photoURL?.message}</span>
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
              <div className="divider h-0">OR</div>
              {/* SignIn Providers */}
              <SocialLogin />
              {/* Already Registered? */}
              <div className="text-center mt-3">
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
