import React from "react";
import NavBar from "../../components/NavBar";
import './myaccount.css'

function MyAccount() {
  return (
    <>
      <NavBar/>
      <div className="container-fluid" style={{ paddingTop: "140px" }}>
        <div className="row pl-1">
          <app-breadcrumb category="My Account"></app-breadcrumb>
        </div>
      </div>

      <div className="container-custom">
        <div className="row mt-md-5 mt-xs-0">
          <div
            className="col-lg-4 col-xl-3 col-md-5 myaccount-menu"
            style={{ padding: "0px 90px 0px 17px" }}
          >
            <div className="row" style={{ borderRight: "1px solid #707070" }}>
              <h5
                className="col-12 mb-4"
                style={{
                  fontFamily: "proxima-nova",
                  fontSize: "24px",
                  textTransform: "uppercase",
                }}
              >
                My account
              </h5>
              <li
                className="side-navs my-2 col-12 highlighted"
                style={{ fontWeight: "bold" }}
              >
                Account Information
              </li>
              <span
                className="side-navs my-2 col-12"
                routerLink="/changepassword"
              >
                {" "}
                Change Password
              </span>
              <span className="side-navs my-2 col-12" routerLink="/myorders1">
                {" "}
                My Orders
              </span>
              <span
                className="side-navs my-2 col-12"
                routerLink="/return-policy"
              >
                {" "}
                Help Center
              </span>
              <span
                className="side-navs my-2 mt-4 col-12"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Logout
              </span>
            </div>
          </div>
          <div className="breadcrumb-switch">
            <div style={{ position: "relative", top: "7px", fontSize: "12pt" }}>
              <app-breadcrumb category="My Account"></app-breadcrumb>
            </div>
            <div>
              <button id="switch-btn" routerLink="/myaccount-switch">
                <span
                  className="iconify"
                  data-icon="octicon:arrow-switch-16"
                  data-inline="false"
                ></span>
                Switch
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-xl-5">
            <h1
              style={{
                fontFamily: "proxima-nova",
                fontWeight: "bolder",
                textTransform: "uppercase",
              }}
            >
              Hello,
            </h1>
            <br />
            <small className="text-muted">
              From your dashboard you have the ability to view a snapshot of
              your recent account activity and update your account information.
              Select a link below to view or edit information.{" "}
            </small>
            <br />
            <br />

            <div className="account-info">
              <h2>Account Information</h2>
              <hr style={{ height: "0.1px" }} />
              <div className="d-flex justify-content-between mb-3">
                <h5 className="float-left">Contact Information</h5>
                <span
                  className="edit-btn"
                  style={{
                    marginLeft: "50px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  routerLink="/editprofile"
                >
                  Edit
                </span>
              </div>
              <p>Name: John Doe</p>
              <div className="d-flex justify-content-between">
                <p>Contact no: 9687567658</p>
              </div>
              <p>Email: johndoe@gmail.com</p>
              <br />
              <br />
            </div>

            <div className="address-book">
              <h2>Address book</h2>
              <hr style={{ height: "0.1px" }} className="mb-4" />
            </div>

            <span
              style={{ fontWeight: "bold", textDecoration: "underline" }}
              routerLink="/manageaddress"
            >
              Manage Addresses
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
