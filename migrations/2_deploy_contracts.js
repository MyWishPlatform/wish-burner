const Burner = artifacts.require("Burner");

module.exports = function(deployer) {
  deployer.deploy(Burner, process.env.TOKEN_ADDRESS);
};
