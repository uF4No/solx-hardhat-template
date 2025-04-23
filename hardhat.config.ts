import { HardhatUserConfig, subtask } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// custom compiler subtask from https://hardhat.org/hardhat-runner/docs/other-guides/using-custom-solc

const SOLX_BINARY_FILENAME = "solx"; // filename of the solx compiler binary

const {
  TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD,
} = require("hardhat/builtin-tasks/task-names");
const path = require("path");

subtask(
  TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD,
  async (
    args: {
      solcVersion: string;
    },
    hre,
    runSuper
  ) => {
    if (args.solcVersion === "0.8.29") {
      console.log(`👾👾 Compiling with solx compiler 👾👾`);
      const compilerPath = path.join(
        __dirname,
        SOLX_BINARY_FILENAME,
      );

      return {
        compilerPath,
        isSolcJs: false, // if you are using a native compiler, set this to false
        version: args.solcVersion,
        // This is used as extra information in the build-info files,
        // but other than that is not important
        longVersion: "solx-0.8.29",
      };
    }

    // since we only want to override the compiler for version solx,
    // the runSuper function allows us to call the default subtask.
    return runSuper();
  }
);

const config: HardhatUserConfig = {
  solidity:{
    version: "0.8.29",
  },
};

export default config;
