import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Menu } from "@material-ui/icons";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from "next/router";
import { logout } from "../actions/userAction";

function Sidebar() {
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  const [open, setOpen] = useState(false);
  const router= useRouter()
  const toggleDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <Container>
        <CeletalImg src="./fend.png" alt="" />
        <Navbar>
          <NavItemSelected>
            <HomeIcon style={{ color: "#ffffff", marginRight: "2vw" }} />
            Home
          </NavItemSelected>
          <NavItem>
            <PeopleIcon style={{ color: "#757575", marginRight: "2vw" }} />
            Matches
          </NavItem>
          <NavItem>
            <CreditCardIcon style={{ color: "#757575", marginRight: "2vw" }} />
            Manage Success
          </NavItem>
          <NavItem>
            <CreditCardIcon style={{ color: "#757575", marginRight: "2vw" }} />
            Integration
          </NavItem>
          <NavItem>
            <CreditCardIcon style={{ color: "#757575", marginRight: "2vw" }} />
            Alerts
          </NavItem>
        </Navbar>
      </Container>
      <ContainerT>
        <NavT>
          <Menu onClick={() => setOpen(!open)} />
          <CeletalImg src="./fend.png" alt=""  />
        </NavT>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: 1000,
            },
          }}
        >
          <DrawerContainer>
            <DraNav>
              <CloseIcon onClick={() => setOpen(false)} />
              <CeletalImg src="./fend.png" alt='' width='200'/>
            </DraNav>
            <Navbar>
              <NavItemSelected>
                <HomeIcon style={{ color: "#ffffff", marginRight: "2vw" }} />
                Home
              </NavItemSelected>
              <NavItem>
                <PeopleIcon style={{ color: "#757575", marginRight: "2vw" }} />
                Matches
              </NavItem>
              <NavItem>
                <CreditCardIcon
                  style={{ color: "#757575", marginRight: "2vw" }}
                />
                Manage Success
              </NavItem>
              <NavItem>
                <CreditCardIcon
                  style={{ color: "#757575", marginRight: "2vw" }}
                />
                Integration
              </NavItem>
              <NavItem>
                <CreditCardIcon
                  style={{ color: "#757575", marginRight: "2vw" }}
                />
                Alerts
              </NavItem>
            
                {user&&user.username?
                  <NavItem   onClick={()=>dispatch(logout())}>
                <LogoutIcon
                  style={{ color: "#757575", marginRight: "2vw" }} />
                Logout
              </NavItem>:
              <NavItem  onClick={()=>(router.push('/signin'))}>
                <LoginIcon  style={{ color: "#757575", marginRight: "2vw" }} />
                Login
              </NavItem>}
            </Navbar>
          </DrawerContainer>
        </Drawer>
      </ContainerT>
    </>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 20%;
  @media (max-width: 600px) {
    display: none;
  }
`;
const DrawerContainer = styled.div`
  padding: 2vh 4vw;
  height: 65vh;
`;
const ContainerT = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
const NavT = styled.div`
  display: flex;
  align-items: center;
  padding: 2vh 2vw;
`;
const DraNav = styled.div`
  display: flex;
  align-items: center;
  padding: 2vh 2vw;
`;
const Navbar = styled.ul`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1vh 1vw;
  color: #bababa;
  cursor: pointer;
  margin: 1vh 0vw;
`;

const NavItemSelected = styled.li`
  display: flex;
  align-items: center;
  padding: 1vh 1vw;
  color: #ffffff;
  cursor: pointer;
  margin: 1vh 0vw;
  background-color: #2088d2;
`;

const CeletalImg = styled.img`
  width: 100%;
  height: 10%;
  @media (max-width: 600px) {
    width: 30%;
    margin-left: 15vw;
  }
`;
