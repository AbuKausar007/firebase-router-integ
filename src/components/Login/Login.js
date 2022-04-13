import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signinWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Login Here.</h2>
      <button onClick={signinWithGoogle} style={{ margin: "20px" }}>
        Continue with Google
      </button>
      <form action="">
        <input type="text" placeholder="Your Name" /> <br />
        <br />
        <input type="password" placeholder="Password" /> <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
