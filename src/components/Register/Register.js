import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const { signinWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Please Register</h2>
      <div>
        <button onClick={signinWithGoogle} style={{ margin: "20px" }}>
          {" "}
          Continue with Google{" "}
        </button>
      </div>
      <form>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
