import Contact from "../contact";
import contactFactory from "../contactFactory";

const getContactByAddress = async (address) => {
  const contactAddress = await contactFactory.ownerToContact(address);
  console.log("contactAddress: ", contactAddress);
  if (contactAddress === "0x0000000000000000000000000000000000000000") {
    throw new Error("Contract is not exist!");
  }
  const contact = Contact(contactAddress);
  const telegram = await contact.telegram();
  console.log("telegram: ", telegram);
  const discord = await contact.discord();
  console.log("discord: ", discord);
  const description = await contact.description();
  console.log("description: ", description);

  return { telegram, discord, description };
};

export default getContactByAddress;
