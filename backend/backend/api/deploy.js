const { ethers } = require("hardhat");

module.exports = async function handler(req, res) {
  const { amount } = JSON.parse(req.body);
  const factory = await ethers.getContractFactory("USDTz");
  const contract = await factory.deploy(ethers.utils.parseUnits(amount, 18));
  await contract.deployed();
  res.json({ address: contract.address });
};
