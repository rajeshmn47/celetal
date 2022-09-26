import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import EditOutlineIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Edit from "./edit";

function TableContainer({ users, handledelete, setEdititem, setOpen }) {
  const handleedit = (a) => {
    setEdititem(a);
    setOpen(true);
  };
  return (
    <Table>
      <thead>
        <TableRow>
          <th>Username</th>
          <th>E-mail</th>
          <th>Phone No.</th>
          <th>Company</th>
          <th>Action</th>
        </TableRow>
      </thead>
      <tbody>
        {users &&
          users.map((u) => (
            <TableRow key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phonenumber}</td>
              <td>{u.company}</td>
              <td>
                <EditOutlineIcon
                  style={{ color: "#2088D2" }}
                  onClick={() => handleedit(u)}
                />
                <DeleteOutlineIcon onClick={() => handledelete(u._id)} />
              </td>
            </TableRow>
          ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  background-color: #ffffff;
  -moz-box-shadow: 0 0 5px #eeeeee;
  -webkit-box-shadow: 0 0 5px #eeeeee;
  box-shadow: 0 0 15px #eeeeee;
  border-radius: 5px;
  width: 100%;
  td {
    text-align: center;
    padding: 2vh 1vw;
  }
  th {
    text-align: center;
    padding: 2vh 1vw;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solfid #e0e0e0;
  padding: 2ggdsffh 2vw;
`;

export default TableContainer;
