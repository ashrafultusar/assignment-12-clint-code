import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, signInGoogle, updateUserProfile } = useAuth();

  const handelRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    const formdata = new FormData();
    formdata.append("image", image);

    try {
      //upload image
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IBB_API_KEY
        }`,
        formdata
      );

      console.log(data.data.display_url);

      // user signup
      const result = await createUser(email, password);
      console.log(result);

      // update profile
      await updateUserProfile(name, data.data.display_url);
      navigate("/");
      toast.success("Register successful");
    } catch (err) {
      // consol
      console.log(err);
      toast.error(err.message);
    }
  };


  // google signin
  const googleSignIn =async () => {
    try {
      await signInGoogle()
      navigate('/')
      toast.success("Register successful");

    } catch (err) {
      // 
      console.log(err)
      toast.error(err.message);
    }
  }

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelRegister} className="card-body">
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              
                </div> */}
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="relative">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* <span
                  className="absolute top-12 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash></FaEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </span> */}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                You have an account! please
                <Link to={"/login"} className="text-orange-500 font-bold">
                  Login
                </Link>
              </p>

              <div>
                <button onClick={googleSignIn} className=" btn w-full bg-[#B58753] flex items-center  text-[16px]">
                  <FaGoogle />
                  Google Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
