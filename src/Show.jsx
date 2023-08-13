import { MyContext } from "./App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "./Products.css";

const Show = () => {
  const rec = useContext(MyContext);
  const { state, dispatch } = rec;
  const nav = useNavigate();

  const handleDel = (index) => {
    dispatch({ type: "del", payload: index });
  };

  return (
    <>
      {state.users.length === 0 ? (
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center text-muted">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">Nothing any details here !</h3>

                    <p>the page you are looking for not avaible!</p>
                    <a
                      className="button-29"
                      onClick={() => nav("/")}
                    >
                      Back Home
                    </a>
                    <div className="main">
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                      <div className="butterfly"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        state.users.map((user, i) => (
          <div key={i} className="box">
            <h3>{user.name}</h3>
            <p>
              {user.age}
              <br />
              {user.email}
            </p>
            <p>
              <input
                type="button"
                className="bom btn btn-danger ronder-2"
                value="X"
                onClick={() => handleDel(i)}
              />
            </p>
          </div>
        ))
      )}
    </>
  );
};

export default Show;
