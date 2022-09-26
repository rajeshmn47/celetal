import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  console.log(user, "sehwag");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (isAuthenticated) {
      console.log("login suiccessfull");
    }
  }, [dispatch, loading, isAuthenticated, user, error]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const formdata = { username: username, password: password };
    dispatch(register(formdata));
    console.log("ok");
  };
  return (
    <>
      <div className="signup">
        <div className="signupbox">
          <form className="signupform" onSubmit={(e) => handlesubmit(e)}>
            <div>
              <h5 className="font-bold">username</h5>
              <input
                type="text"
                className="inputs"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <h5 className="font-bold">email</h5>
              <input type="text" className="inputs" />
            </div>
            <div>
              <h5 className="font-bold">password</h5>
              <input
                type="text"
                className="inputs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="submitbutton" value="Sign up" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
