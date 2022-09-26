import styled from "@emotion/styled";
import Main from "./main";
import Sidebar from "./sidebar";
function Home() {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
`;
