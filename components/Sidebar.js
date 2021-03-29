import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <iconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </iconContainer>
      </Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #ffeeed;
  z-index: 1;
  justify-content: space-between;
`;

const UserAvatar = styled(Avatar)``;

const IconContainer = styled.div``;
