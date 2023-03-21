# Smart Contract Winner - Alchemy Week 4 assigment

The goal of this project is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

To run this project follow the steps bellow:

1. Run 
```shell
npm install
```
2. Create *.env* file where you put your goerli url and alchemy private key into GOERLI_URL and PRIVATE_KEY variables respectively.
3. Run 
```shell
npx hardhart compile
npx hardhart run scripts/deploy.ts // to deploy your AttemptContract
```
4. Copy the address in your terminal, go into scripts/attempt.ts file and change the constant called _attemptContractAddress_ to the address you just copied.
5. Run 
```shell
npx hardhart run scripts/attempt.ts
```

That's it :)
