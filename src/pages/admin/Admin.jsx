import React from "react";
import "./admin.scss";
import { useNavigate } from "react-router-dom";

function Admin() {
  let navigate = useNavigate();
  const hundleLogout = () => {
    localStorage.clear();
    navigate("/sign");
  };

  return (
    <section className="container admin">
      <div className="admin__left">
        <div className="admin__left__link">
          <a href="../index.html">Home</a> /<a href="#">My account</a>
        </div>
        <div>
          <h3 className="admin__left__title">Manage My Account</h3>
          <p className="admin__left__desc">My Profile</p>
          <p className="admin__left__desc">Address Book</p>
          <p className="admin__left__desc">My Payment Options</p>
        </div>
        <div>
          <h3 className="admin__left__title">Manage My Account</h3>
          <p className="admin__left__desc">My Returns</p>
          <p className="admin__left__desc">My Cancellations</p>
        </div>
        <h3 className="admin__left__title">My WishList</h3>
        <button onClick={hundleLogout} className="admin__logOut">
          Log Out
        </button>
      </div>

      <div className="admin__right">
        <h3 className="admin__right__desc">
          Welcome! <span>Md Rimel</span>
        </h3>
        <form className="form" action="">
          <h3 className="form__title">Edit Your Profile</h3>
          <div className="form__edit">
            <div>
              <label for="">First Name</label>
              <input placeholder="Md" type="text" />
            </div>
            <div>
              <label for="">Last Name</label>
              <input placeholder="Rimel" type="text" />
            </div>
            <div>
              <label for="">Email</label>
              <input placeholder="rimel1111@gmail.com" type="email" />
            </div>
            <div>
              <label for="">Address</label>
              <input placeholder="Kingston, 5236, United State" type="text" />
            </div>
          </div>
          <h3>Password Changes</h3>
          <div className="form__change">
            <input placeholder="Current Passwod" type="text" />
            <input placeholder="New Passwod" type="text" />
            <input placeholder="Confirm New Passwod" type="text" />
          </div>
          <div className="form__btns">
            <button className="form__cencel-btn">Cancel</button>
            <button className="form__save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Admin;
