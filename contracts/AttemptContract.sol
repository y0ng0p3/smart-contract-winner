// SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.9;
pragma solidity ^0.8.0;

contract AttemptContract {

    function attempt(address contractAddress) external {
        (bool success,) = contractAddress.call(abi.encodeWithSignature("attempt()"));
        require(success);
    }
}

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
