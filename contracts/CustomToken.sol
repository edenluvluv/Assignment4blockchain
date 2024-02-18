// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CustomToken is ERC20, Ownable {
    uint256 private _blockReward;

    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
    _mint(msg.sender, initialSupply);
    Ownable(msg.sender);
}

    function setBlockReward(uint256 amount) external onlyOwner {
        _blockReward = amount;
    }

    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }

    function mintMinerReward() external {
        require(_blockReward > 0, "Block reward not set");
        _mint(block.coinbase, _blockReward);
    }

function _beforeTokenTransfer(address from, address to, uint256 amount) internal {
        // Implement any additional checks or behaviors before token transfer
    }

    function destroy(address recipient) external onlyOwner {
        selfdestruct(payable(recipient));
    }
}
