## Deploy contract to network

- `yarn install`
- create `.env` file with environment variables: `PK`, `INFURA_KEY`, `TOKEN_ADDRESS`
- `yarn compile`
- `yarn migrate --network ropsten` or `yarn migrate --network mainnet`