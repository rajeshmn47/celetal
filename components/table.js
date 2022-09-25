import styled from '@emotion/styled';
import EditOutlineIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function TableContainer(){
    return(
        <Table>
     <TableRow>
    <th>Username</th>
    <th>E-mail</th>
    <th>Phone No.</th>
    <th>Company</th>
    <th>Action</th>
  </TableRow>
  <TableRow>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds Futterkiste</td>
    <td><EditOutlineIcon  style={{color:'#2088D2'}} />
    <DeleteOutlineIcon /> </td>
  </TableRow>

        </Table>
    )
}

const Table= styled.table`
background-color:#ffffff;
-moz-box-shadow: 0 0 5px #EEEEEE;
-webkit-box-shadow: 0 0 5px #EEEEEE;
box-shadow: 0 0 15px #EEEEEE;
border-radius: 5px;
width:100%;
td {
    text-align:center;
    padding: 2vh 1vw;
}
th {
    text-align:center;
    padding: 2vh 1vw;
}
`

const TableRow= styled.tr`
border-bottom: 1px solid #E0E0E0;
padding: 2vh 2vw;`

export default TableContainer;

