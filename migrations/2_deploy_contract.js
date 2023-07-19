const Ashyam = artifacts.require("Ashyam");

module.exports = function(deployer) {
  const name = "Ashyam";
  const symbol = "Ash";
  const decimalsValue = 18;

  deployer.deploy(Ashyam, name, symbol, decimalsValue).then(async () => {
    const deployedContract = await Ashyam.deployed();
    console.log("Contract deployed at:", deployedContract.address);
  });
};
