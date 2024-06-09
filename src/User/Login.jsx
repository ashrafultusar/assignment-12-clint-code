import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
// import axios from "axios";
import { toast } from "react-toastify";


const Login = () => {
  const location = useLocation()
  const from=location?.state|| '/'
  const navigate = useNavigate();
  const { signIn, signInGoogle } = useAuth();

  const handellogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  

    try {
      // login  user
      await signIn(email,password)
      navigate(from);
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
      navigate(from)
      toast.success("Register successful");

    } catch (err) {
      // 
      console.log(err)
      toast.error(err.message);
    }
  }

  return (
    <div>
      <Helmet>
        <title>ConvoHub | Login</title>
      </Helmet>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handellogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider">OR</div>
              <div>
                <button onClick={googleSignIn} className=" btn w-full bg-[#B58753] flex items-center  text-[16px]">
                  <FaGoogle />
                  Google Login
                </button>
              </div>
              <p>
                You have no account! Please
                <Link to={"/register"} className="text-orange-500 font-bold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
