require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)


const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x53933E3A409476Ce9ddd9B20c1401581f3c334A5";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
