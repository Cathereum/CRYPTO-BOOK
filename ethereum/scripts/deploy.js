const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address); // эти 2 строчки позволят увидеть адрес кошелька отправителя

  const ContactFactory = await hre.ethers.getContractFactory("ContactFactory");
  const contactFactory = await ContactFactory.deploy();

  console.log("ContactFactory deployed to:", contactFactory.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
