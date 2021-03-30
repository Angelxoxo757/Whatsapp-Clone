import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

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
      <Search>
        <SearchIcon />
      </Search>
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
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  ::hover {
    opacity: 0.8;
  }
`;

const Search = styled.div``;

const IconContainer = styled.div``;
