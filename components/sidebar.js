import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function Sidebar(){
    return(
        <Container>
            <CeletalImg src='./fend.png' alt='' />
      <Navbar >
        <NavItemSelected>
        <HomeIcon style={{color:'#ffffff',marginRight:'2vw'}} />
            Home
          
        </NavItemSelected>
        <NavItem>
        <PeopleIcon style={{color:'#757575',marginRight:'2vw'}} />
            Matches
          
        </NavItem>
        <NavItem>
        <CreditCardIcon style={{color:'#757575',marginRight:'2vw'}} />
        Manage Success
          
        </NavItem>
        <NavItem>
        <CreditCardIcon style={{color:'#757575',marginRight:'2vw'}} />
        Integration
        </NavItem>
        <NavItem>
        <CreditCardIcon style={{color:'#757575',marginRight:'2vw'}} />
        Alerts
          
        </NavItem>
      </Navbar>

</Container>
    )
}

export default Sidebar;

const Container= styled.div`
width:20%;`

const Navbar = styled.ul`
`
const NavItem = styled.li`
display:flex;
align-items:center;
padding: 1vh 1vw;
color: #BABABA;
cursor:pointer;
margin: 1vh 0vw;`


const NavItemSelected= styled.li`
display:flex;
align-items:center;
padding: 1vh 1vw;
color: #ffffff;
cursor:pointer;
margin: 1vh 0vw;
background-color:#2088D2;`

const CeletalImg= styled.img`
width:100%;
height:10%;`