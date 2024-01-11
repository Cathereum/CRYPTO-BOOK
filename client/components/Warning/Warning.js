import { Message } from "semantic-ui-react";

const Warning = ({ message }) => {
  return (
    <Message warning>
      <Message.Header>{message}</Message.Header>
    </Message>
  );
};

export default Warning;
