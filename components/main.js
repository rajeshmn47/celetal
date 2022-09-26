import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";
import SortIcon from "@mui/icons-material/Sort";
import AddIcon from "@mui/icons-material/Add";
import Table from "./table";
import Add from "./add";
import Edit from "./edit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../actions/userAction";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";

function Main() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [editopen, setEditopen] = useState(false);
  const [users, setUsers] = useState();
  const [edititem, setEdititem] = useState();
  const [counts, setCounts] = useState();
  const [notifyopen, setNotifyopen] = useState();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    async function getUsers() {
      const data = await axios.get(
        `https://interviewassignmentrajesh.herokuapp.com/user/getallusers/?page=${page}`
      );
      console.log(data);
      setUsers(data.data.users);
    }
    getUsers();
  }, []);

  const handleclick = () => {
    setOpen(true);
  };
  const handlePages = (i) => {
    if (page > 0) {
      setPage(page + i);
    }
  };
  const handledelete = async (id) => {
    console.log(id, "sachin");
    const d = await axios.get(
      `https://interviewassignmentrajesh.herokuapp.com/user/deleteuser/${id}`
    );
    const data = await axios.get(
      `https://interviewassignmentrajesh.herokuapp.com/user/getallusers/?page=${page}`
    );
    console.log(data);
    setUsers(data.data.users);
  };

  const handleLogout = async () => {
    dispatch(logout());
  };
  return (
    <Container>
      <AppBar
        position="static"
        elevation={0}
        className="appbar"
        style={{ backgroundColor: "#F8F8F8", padding: "2vh 2vw" }}
      >
        <Grid
          container
          spacing={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={8} lg={9}>
            <Input type="text" placeholder="search" />
          </Grid>
          <Grid item xs={8} lg={1}>
            <NotificationsIcon style={{ color: "#757575" }} />
          </Grid>
          <Grid item xs={8} lg={1}>
            <Name>{user && user.username?.charAt(0)}</Name>
          </Grid>
          <Grid item xs={8} lg={1}>
            {user && user.username ? (
              <Logout onClick={() => handleLogout()}>logout</Logout>
            ) : (
              <Login href="/signin">Sign in</Login>
            )}
          </Grid>
        </Grid>
      </AppBar>
      <Title>Customer Details</Title>
      <TableHeader>
        <Terms>terms you are tracking</Terms>
        <Actions>
          <FilterButton>
            <SortIcon />
            filter
          </FilterButton>
          <AddButton onClick={handleclick}>
            <AddIcon />
            Add{" "}
          </AddButton>
        </Actions>
      </TableHeader>
      <Table
        users={users}
        handledelete={handledelete}
        setEdititem={setEdititem}
        setOpen={setEditopen}
      />
      <Add
        open={open}
        setOpen={setOpen}
        setUsers={setUsers}
        page={page}
        notifyopen={notifyopen}
        setNotifyopen={setNotifyopen}
      />
      <Edit
        open={editopen}
        setOpen={setEditopen}
        edititem={edititem}
        setUsers={setUsers}
        page={page}
        notifyopen={notifyopen}
        setNotifyopen={setNotifyopen}
      />

      <Pagination>
        <LeftPage onClick={() => handlePages(-1)}>
          <ChevronLeftIcon style={{ fontSize: "3rem" }} />
        </LeftPage>
        {page}
        <RightPage onClick={() => handlePages(1)}>
          <ChevronRightIcon style={{ fontSize: "3rem", color: "#ec633c" }} />
        </RightPage>
      </Pagination>
    </Container>
  );
}

const Container = styled.div`
  .css-hip9hq-MuiPaper-root-MuiAppBar-root {
    background-color: #ffffff;
    @media (max-width: 600px) {
      display: none !important;
      position: static;
    }
  }
  .appbar {
    @media (max-width: 600px) {
      display: none !important;
    }
  }
  background-color: #f8f8f8;
  width: 80%;
  padding: 2vh 2vw;
  height: 100vh;
  @media (max-width: 600px) {
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  color: black;
  -moz-box-shadow: 0 0 5px #eeeeee;
  -webkit-box-shadow: 0 0 5px #eeeeee;
  box-shadow: 0 0 15px #eeeeee;
  padding: 1vh 2vw;
  width: 60%;
  border-radius: 8px;
`;

const Name = styled.div`
  background-color: #2088d2;
  color: #ffffff;
  border-radius: 50%;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

const Terms = styled.h1``;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vh 0vw;
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FilterButton = styled.button`
  background-color: transparent;
  border: 1px solid #757575;
  color: #757575;
  border-radius: 5px;
  margin-right: 2vw;
  padding: 1vh 2vw;
  display: flex;
  justify-content: space-evenly;
`;

const AddButton = styled.button`
  background-color: #ec633c;
  border-radius: 5px;
  color: #ffffff;
  padding: 1vh 2vw;
  display: flex;
  justify-content: space-evenly;
`;

const Logout = styled.button`
  background-color: #ec633c;
  text-transform: capitalize;
  padding: 1vh 1vw;
  border-radius: 5px;
  color: #ffffff;
`;
const Login = styled.a`
  text-transform: capitalize;
  border-radius: 5px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 15vw;
  flex: flex-end;
  float: right;
`;

const LeftPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`;
const RightPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`;
export default Main;
