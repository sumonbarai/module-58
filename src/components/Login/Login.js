import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signWithGoogleAccount } = useFirebase();

  return (
    <div className="container">
      <h2 className="text-center text-uppercase">please log in</h2>
      <form className="w-25 mx-auto">
        <input
          className="w-100 my-2 px-2 py-1 rounded-3"
          type="email"
          placeholder="type email address"
          name=""
        />
        <input
          className="w-100 my-2 px-2 py-1 rounded-3"
          type="password"
          placeholder="type password"
          name=""
        />
        <input
          className="w-100 my-2 rounded-pill"
          type="submit"
          value="Log in"
        />
      </form>
      <button
        className="text-capitalize w-25 text-center mx-auto d-block my-5 rounded-3 bg-secondary"
        onClick={signWithGoogleAccount}
      >
        sign in with google
      </button>
    </div>
  );
};

export default Login;
