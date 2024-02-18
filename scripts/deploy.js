async function main() {
  const CustomToken = await ethers.getContractFactory("CustomToken");
  const customToken = await CustomToken.deploy("Custom Token", "CT", ethers.utils.parseEther("1000000"));

  console.log("CustomToken deployed to:", customToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
