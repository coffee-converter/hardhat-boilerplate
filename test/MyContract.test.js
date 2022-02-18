const { expect } = require("chai");
const { ethers } = require("hardhat");

let contract, accounts;

beforeEach(async () => {
  const MyContract = await ethers.getContractFactory("MyContract");
  contract = await MyContract.deploy();
  await contract.deployed();

  accounts = await ethers.getSigners();
});

describe("MyContract", function () {
  it("should say hello", async function () {
    expect(await contract.helloWorld()).to.equal("Hello World!");
  });
});
