const BN = web3.utils.BN;
require('chai')
    .use(require('bn-chai')(BN));
const { expect } = require('chai');

const Burner = artifacts.require("Burner");
const Token = artifacts.require("TestToken");

contract("Burner", ([owner, ...accounts]) => {
    let token;
    let burner;

    beforeEach(async () => {
        token = await Token.new();
        burner = await Burner.new(token.address);
    });

    it('send & burn', async () => {
        await token.mint(accounts[0], '1000000', { from: owner });
        await token.transfer(burner.address, '1000000', { from: accounts[0] });
        await burner.burn({ from: accounts[1] });

        expect(await token.balanceOf(accounts[0])).to.eq.BN(0);
        expect(await token.balanceOf(burner.address)).to.eq.BN(0);
        expect(await token.totalSupply()).to.eq.BN(0);
    });

    it('send, burn, send, burn...', async () => {
        for (let i = 0; i < 5; i++) {
            await token.mint(accounts[0], '1000000', { from: owner });
            await token.transfer(burner.address, '1000000', { from: accounts[0] });
            await burner.burn({ from: accounts[1] });
        }

        expect(await token.balanceOf(accounts[0])).to.eq.BN(0);
        expect(await token.balanceOf(burner.address)).to.eq.BN(0);
        expect(await token.totalSupply()).to.eq.BN(0);
    });

    it('send, send, burn', async () => {
        for (let i = 0; i < 5; i++) {
            await token.mint(accounts[0], '1000000', { from: owner });
            await token.transfer(burner.address, '1000000', { from: accounts[0] });
        }

        await burner.burn({ from: accounts[1] });

        expect(await token.balanceOf(accounts[0])).to.eq.BN(0);
        expect(await token.balanceOf(burner.address)).to.eq.BN(0);
        expect(await token.totalSupply()).to.eq.BN(0);
    });
});
