import { ethers } from "ethers";
import provider from "./provider";

const contactFactoryAddress = "0x343Da91B3049266D0E47568f2221333a014b40a1";
const contactFactoryAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_telegram",
        type: "string",
      },
    ],
    name: "createContact1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_telegram",
        type: "string",
      },
      {
        internalType: "string",
        name: "_discord",
        type: "string",
      },
    ],
    name: "createContact2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerToContact",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contactFactory = new ethers.Contract(
  contactFactoryAddress,
  contactFactoryAbi,
  provider
);
export default contactFactory;
