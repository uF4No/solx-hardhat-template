# Sample Hardhat Project with solx

## Setup

1. Download the latest version of solx from the [Releases page](https://github.com/matter-labs/solx) inside your project folder.
2. Make the compiler binary executable with `chmod +x solx`.
3. Make sure that the binary name matches with `SOLX_BINARY_FILENAME` in the `hardhat.config.ts` file.

> ⚠️ The `hardhat.config.ts` file has a custom subtask to use `solx` if the env variable `SOLX_ENABLED` is present. If you want to use a different filename for the `solx` binary, update the `SOLX_BINARY_FILENAME` variable in the `hardhat.config.ts` file as well.

4. To compile with `solx`, set the environment variable `SOLX_ENABLED` or compile or test your project with `SOLX_ENABLED=1 npx hardhat compile`

## Gas reports

This project uses `hardhat-gas-reporter` to generate and save gas reports for both solc and solx.
