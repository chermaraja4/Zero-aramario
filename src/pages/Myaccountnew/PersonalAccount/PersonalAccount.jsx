import React ,{useState}from "react";
import SideNavWithRoutingWidget from "../../../widgets/sideNavWithRoutingWidget/sideNavWithRoutingWidget";
// import "./AccountInformation.scss";
import { Col, Container, Row } from "react-bootstrap";
// import { Col, Row, Form, Button, Container } from "react-bootstrap";
// import AccountInformation from "../Accountinformation/Accountinformation";

import './style.scss';

import AccountInformation from "../Accountinformation/Accountinformation";
import ChangePassword from "../ChangePassword/ChangePassword";
import Myorders from "../Myorders/Myorders";

const PersonalAccount=()=>{

    let menuItems = [
        {
            title: 'Account Information',
            url: "/account-information",
            id: "1"
        },
        {
            title: 'Change Password',
            url: "/change-password",
            id: "2"
        },
        {
            title: 'My orders',
            url: "/my-orders",
            id: "3"
        },
        {
            title: 'Help Center',
            url: "/",
            id: "4"
        }
    ]

    const [currIndex, setCurrIndex] = useState(0);
    const currentTab = (index) => {
        setCurrIndex(index)
    }
    return (
        <Container fluid="md | sm | xs" className="pt-5 account-information-container">
        <p>Home / Account</p>
        <Row className="mt-5">
            <Col xxl={3} xl={3} lg={4}>
                <h2 className="text-uppercase">My Account</h2>
                <SideNavWithRoutingWidget menuData={menuItems} currentIndex={(e)=>currentTab(e)}/>

                <h6 className="logout-link">Log out</h6>
            </Col>
            <Col xxl={7} xl={9} lg={8} md={12} sm={12} xs={12}>
             {currIndex === 0  && <AccountInformation/>} 
             {currIndex === 1 && <ChangePassword/>} 
             {currIndex === 2 && <Myorders/>} 
            </Col>
        </Row>
    </Container>
    )
}

export default PersonalAccount;