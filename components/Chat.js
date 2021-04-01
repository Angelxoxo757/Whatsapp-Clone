import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Chat({ id, users }) {
  return (
    <Container>
      <UserAvatar />
      <p>Recipient Email</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div``;
const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
