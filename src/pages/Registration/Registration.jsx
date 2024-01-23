import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="py-12">
        <div className="container mx-auto">
          <div className="hero-content flex-col">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">SignUp</h1>
            </div>
            <div className="card md:w-[400px]">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Role</span>
                  </label>
                  <select className="select select-bordered w-full max-w-xs" {...register("role")}>
                    <option disabled selected>
                     What's your Role
                    </option>
                    <option>House Owner</option>
                    <option>House Renter</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    {...register("number")}
                    type="number"
                    placeholder="Phono number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
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
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Register"
                  />
                </div>
              </form>
              <p className="text-center">
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
