import React, { useState, Fragment, useEffect } from "react";
import "./navbar.css";
import { addKart } from "../redux-tool/Addtocartredux"
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  
  const localValue = localStorage.getItem("localtoken");
    const [localvalueStore, setLocalvalueStore] = useState(localValue)


    const addToKart = useSelector(state => state.cartAdding.data)
    console.log(addToKart,"cart after adding")


   const logOutButon = () =>{
    localStorage.clear("TOKEN");
    window.location.href = "login"
  }


  useEffect(()=>{
    // console.log(addToKart,"oooooooooooooooo")
  },[addToKart])
  return (
    <Fragment>
      <div class="header fixed-tops ">
        <div className="container">
          <nav
            id="navbar"
            class="navbar navbar-expand-md navbar-light navbar-color hover-change sticky"
          >
            <div id="web-view" className="container-fluid" style={{padding: '0px'}}>
              <a href="/">
                <img
                  src="/assets/zeroarmario.png"
                  width="150px"
                  className="logo-image s-img-4"
                  alt="logo"
                />
              </a>
              <button
                id="toggle-btn"
                style={{ position: "absolute", left: "10px", top: "12px" }}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span id="toggle-target" className="navbar-toggler-icon"></span>
              </button>
              <div id="formobdiv">
                <ul className="navbar-nav me-l d-flex flex-row" id="formob">
                  <a className="nav-link" href="" data-toggle="dropdown">
                    <img
                      className="s-left s-img-1"
                      src="/assets/images/svg/Search.svg"
                      style={{ width: "15px" }}
                      alt="search"
                    />
                  </a>
                  <div className="dropdown-menu megamenu" id="search">
                    <input
                      id="search-1"
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>

                  <li className="nav-item dropdown position-relative">
                    <a
                      className="nav-link "
                      href="/my-account"
                      id="navbarDropdownMenuLink"
                      dataToggle="dropdown"
                      ariaHaspopup="true"
                      // ariaExpanded="false"
                    >
                      <img
                        className="s-left s-img-2"
                        src="/assets/images/svg/Person.svg"
                        style={{ width: "15px" }}
                        alt="me"
                      />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="wishlist">
                        Wishlist
                      </a>
                      <a className="dropdown-item" href="myaccount">
                        Your Account
                      </a>
                    </div>
                  </li>
                  <a className="nav-link" href="checkout">
                    <div className="badge badge-danger s-img-3">
                      <span>{"cart_count"}</span>
                    </div>
                  </a>
                </ul>
              </div>

              <div
                className="collapse navbar-collapse d-flex align-items-center justify-content-between"
                id="navbarResponsive"
              >
                <ul
                  className="navbar-nav mobile-nav"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    marginLeft: "20px",
                  }}
                >
                  <li className="nav-item dropdown has-megamenu dropdown1">
                    <a className="alignment" dataToggle="dropdown">
                      Women
                    </a>
                    <a className="alignment" dataToggle="dropdown">
                      Men
                    </a>
                    <a className="alignment" dataToggle="dropdown">
                      Children
                    </a>
                    <a className="alignment" dataToggle="dropdown">
                      Home
                    </a>
                    <div className="dropdown-menu megamenu dropdown-menu1">
                      <div className="custom-drop-down">
                        <div className="row">
                          <div className="col-2"></div>
                          <div className="col-10 submenu">
                            <div className="submenu-items">
                              <p>New arrivals</p>
                              <li>
                                <a>New In</a>
                              </li>
                              <li>
                                <a>On Sale</a>
                              </li>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1"></div>

                          <div className="col-5"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <ul className="navbar-nav d-flex flex-row" id="forweb">
                  <li className="nav-item dropdown dropdown4">
                    <a
                      className="nav-link dropdown4 search-logo"
                      href="#"
                      dataToggle="dropdown"
                    ></a>
                    <div
                      className="dropdown-menu "
                      style={{ marginTop: "-12px" }}
                      id="search"
                    >
                      <input
                        id="search-1"
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </li>



                  <li
                    className="nav-item dropdown dropdown5"
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      className="nav-link myaccount-logo"
                      data-toggle="dropdown"
                    ></a>
                    <div
                      className="dropdown-menu dropdown-menu4"
                      aria-labelledby="navbarDropdownMenuLink"                    
                    >
                      <p
                        style={{
                          fontWeight: 100,
                          fontWize: "14px",
                          cursor: "pointer",
                        }}
                        routerLink="wishlist/"
                      >
                        Wishlist
                      </p>
                      <p
                        style={{
                          fontWeight: 100,
                          fontWize: "14px",
                          cursor: "pointer",
                        }}
                        routerLink="myaccount/"
                      >
                        My account
                      </p>
                      {localvalueStore ? <p
                        style={{
                          fontWeight: 100,
                          fontWize: "14px",
                          cursor: "pointer",
                        }}
                        routerLink="myaccount/"
                        onClick={() => logOutButon()}
                      >
                      Logout
                      </p> :
                      <p
                      style={{
                        fontWeight: 100,
                        fontWize: "14px",
                        cursor: "pointer",
                      }}
                      routerLink="/login"
                      onClick={() => logOutButon()}
                    >
                    Login
                    </p>
                      }
                    </div>
                  </li>


                  {/* <li
                    className="nav-item dropdown dropdown5"
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <div className="checkout-cart" routerLink="checkout/">
                        <p id="cart-count">{0}</p>
                      </div>
                    </div>
                    <div
                      className="dropdown-menu dropdown-menu4"
                      aria-labelledby="navbarDropdownMenuLink"                    
                    >
                      <p
                        style={{
                          fontWeight: 100,
                          fontWize: "14px",
                          cursor: "pointer",
                        }}
                        routerLink="wishlist/"
                      >
                        Wishlist
                      </p>
                      <p
                        style={{
                          fontWeight: 100,
                          fontWize: "14px",
                          cursor: "pointer",
                        }}
                        routerLink="myaccount/"
                      >
                        My account
                      </p>
                      {localvalueStore ? <p
                        style={{
                          fontWeight: 100,
                          fontWize: "14px",
                          cursor: "pointer",
                        }}
                        routerLink="myaccount/"
                        onClick={() => logOutButon()}
                      >
                      Logout
                      </p> :
                      <p
                      style={{
                        fontWeight: 100,
                        fontWize: "14px",
                        cursor: "pointer",
                      }}
                      routerLink="/login"
                      onClick={() => logOutButon()}
                    >
                    Login
                    </p>
                      }
                    </div>
                  </li> */}

                  <li className="nav-item dropdown dropdown5 checkout-item" 
                  style={{ cursor: "pointer" }}>
                    <div>
                      <div className="checkout-cart" routerLink="checkout/">
                        <p id="cart-count">{addToKart}</p>
                      </div>
                      <div
                      className="dropdown-menu dropdown-menu4"
                      aria-labelledby="navbarDropdownMenuLink"                    
                    >
                      <p
                        style={{
                          fontWeight: 100,
                          fontWize: "14px",
                          cursor: "pointer",
                        }}
                        routerLink="wishlist/"
                      >
                        {/* Wishlist */}
                      </p>
                    </div>
                    </div>
                  </li>
                  <li className="checkout-item" style={{ cursor: "pointer" }}>
                  <div className="input-cont formGroup d-flex align-items-center justify-content-center">
              </div>
              </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar;
