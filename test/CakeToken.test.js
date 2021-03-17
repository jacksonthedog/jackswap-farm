const { assert } = require("chai");

const JackToken = artifacts.require('JackToken');

contract('JackToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.jack = await JackToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.jack.mint(alice, 1000, { from: minter });
        assert.equal((await this.jack.balanceOf(alice)).toString(), '1000');
    })
});
