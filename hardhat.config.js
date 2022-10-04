require("hardhat-circom");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.11",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "https://hermezptau.blob.core.windows.net/ptau/powersOfTau28_hez_final_17.ptau",
    circuits: [
      /*
      {
        name: "my-circuit",
        // Generate PLONK
        protocol: "plonk",
      },
      */
      {
        name: "simple-polynomial",
        // Explicitly generate groth16
        protocol: "groth16",
      },
    ],
  },
};
