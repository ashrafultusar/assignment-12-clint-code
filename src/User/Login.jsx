import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";



const Login = () => {
  return (
      <div>
          <Helmet>
        <title>ConvoHub | Login</title>
      </Helmet>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                              <button className=" btn w-full bg-[#B58753] flex items-center  text-[16px]"><FaGoogle />Google Login
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
