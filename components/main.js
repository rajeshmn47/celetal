import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Grid from '@mui/material/Grid';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import Table from './table'

function Main(){
    return(
        <Container>
              <AppBar position="static" elevation={0} 
              style={{backgroundColor:'#F8F8F8',padding:'2vh 2vw'}}>
              <Grid container spacing={2}>
        <Grid item xs={8} lg={10}>
        <Input type='text' placeholder='search' />

        </Grid>
        <Grid item xs={8} lg={1}>
        <NotificationsIcon  style={{color:'#757575'}}/>
        </Grid>
        <Grid item xs={8} lg={1}>
        <Name>A</Name>
        </Grid>
</Grid>

</AppBar>
<Title>Customer Details</Title>
<TableHeader>
<Terms>terms you are tracking</Terms>
<Actions>
    <FilterButton>
        <SortIcon/>
        filter</FilterButton>
    <AddButton>
        <AddIcon />Add </AddButton>
</Actions>
</TableHeader>
<Table/>
        </Container>
    )
}


const Container=styled.div`
.css-hip9hq-MuiPaper-root-MuiAppBar-root {
    background-color:#ffffff;
}
background-color:#F8F8F8;
width:80%;
padding: 2vh 2vw;
height: 100vh;`

const Input = styled.input`
outline:none;
border:none;
color:black;
-moz-box-shadow: 0 0 5px #EEEEEE;
-webkit-box-shadow: 0 0 5px #EEEEEE;
box-shadow: 0 0 15px #EEEEEE;
padding:1vh 2vw;
width:60%;
border-radius: 8px;
`

const Name= styled.div`
background-color:#2088D2;
color:#ffffff;
border-radius: 50%;
width: 25px;
display:flex;
align-items:center;
justify-content:center;
height: 25px;`

const Title= styled.h1`
font-size: 2rem;
margin-top: 2vh;
margin-bottom: 1vh;
`;

const Terms= styled.h1`
`;

const TableHeader= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin: 2vh 0vw;
`;
const Actions = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;`

const FilterButton= styled.button`
background-color:transparent;
border: 1px solid #757575;
color:#757575;
border-radius: 5px;
margin-right: 2vw;
padding: 1vh 2vw;
display: flex;
justify-content: space-evenly;
`

const AddButton= styled.button`
background-color:#EC633C;
border-radius: 5px;
color:#ffffff;
padding: 1vh 2vw;
display: flex;
justify-content: space-evenly;
`
export default Main;