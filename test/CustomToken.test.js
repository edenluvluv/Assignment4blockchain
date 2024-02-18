const { expect } = require("chai");

describe("CustomToken", function () {
  let CustomToken;
  let customToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    CustomToken = await ethers.getContractFactory("CustomToken");
    [owner, addr1, addr2] = await ethers.getSigners();
    customToken = await CustomToken.deploy("Custom Token", "CT", ethers.utils.parseEther("1000000"));
    await customToken.deployed();
  });

  it("Should return the correct name, symbol, and initial supply", async function () {
    expect(await customToken.name()).to.equal("Custom Token");
    expect(await customToken.symbol()).to.equal("CT");
    expect(await customToken.totalSupply()).to.equal(ethers.utils.parseEther("1000000"));
  });

  // Write more test cases covering all functionalities and scenarios
});
