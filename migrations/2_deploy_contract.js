const Assessment = artifacts.require("Myproject");

module.exports = function(deployer) {
  deployer.deploy(Assessment, 0).then(async () => {
    const deployedContract = await Assessment.deployed();
    console.log("Contract deployed at:", deployedContract.address);
  });
};
