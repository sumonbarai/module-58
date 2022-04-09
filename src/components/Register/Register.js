import React from "react";

const Register = () => {
  return (
    <div className="container">
      <h2 className="text-center text-uppercase">Registration form</h2>
      <form className="w-25 mx-auto">
        <input
          className="w-100 my-2 px-2 py-1 rounded-3"
          type="text"
          placeholder="Type your name"
          name=""
        />
        <input
          className="w-100 my-2 px-2 py-1 rounded-3"
          type="email"
          placeholder="Type email address"
          name=""
        />
        <input
          className="w-100 my-2 px-2 py-1 rounded-3"
          type="password"
          placeholder="Type password"
          name=""
        />
        <input
          className="w-100 my-2 rounded-pill"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Register;
