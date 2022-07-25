import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

  const navigate = useNavigate();


  const onLogin = ()=> {
    navigate('/dashboard', {
      replace: true
    });
  }
  
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 offset-4">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                />
                {/* <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button onClick={ onLogin } className="btn btn-primary">
                Log in
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};
