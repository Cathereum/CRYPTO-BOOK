import { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import { Button, Form } from "semantic-ui-react";
import Warning from "../components/Warning/Warning";
import getContactByAddress from "../utils/getContactByAddress";

const ShowContact = () => {
  const addressRef = useRef();
  const [errorInput, setErrorInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [telegram, setTelegram] = useState();
  const [discord, setDiscord] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorInput(false);
    setTelegram(null);
    setDiscord(null);
    setDescription(null);
    const address = addressRef.current.value;
    if (!address) {
      setErrorInput(true);
      setErrorMessage("Enter a contract address!");
      return;
    }
    setErrorInput(false);
    console.log("address: ", address);

    try {
      const contact = await getContactByAddress(address);
      setTelegram(contact.telegram);
      setDiscord(contact.discord);
      setDescription(contact.description);
    } catch (error) {
      console.error(error);
      setErrorInput(true);
      setErrorMessage(error.message);
    }
  };
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Add a contract address to check info</label>
          <input ref={addressRef} placeholder="Contract address" />
        </Form.Field>
        <Button primary type="submit">
          Show info
        </Button>
      </Form>
      {errorInput && <Warning message={errorMessage} />}
      {telegram && <h3>Telegram: {telegram}</h3>}
      {discord && <h3>Discord: {discord}</h3>}
      {description && <h3>Description: {description}</h3>}
    </Layout>
  );
};

export default ShowContact;
