const solanaWeb3 = require("@solana/web3.js");
const establishConnection = async () => {
  rpcUrl = "https://api.devnet.solana.com";
  connection = new solanaWeb3.Connection(rpcUrl, "confirmed");
  console.log("Connection to cluster established:", rpcUrl);
};
const connectWallet = async () => {
  let secretKey = Uint8Array.from([
    127, 225, 63, 104, 35, 51, 184, 116, 67, 31, 95, 164, 38, 3, 172, 97, 36,
    114, 226, 228, 239, 162, 29, 164, 134, 66, 183, 154, 20, 150, 132, 239, 247,
    126, 212, 17, 64, 253, 9, 169, 69, 132, 129, 89, 120, 14, 117, 204, 35, 222,
    206, 49, 30, 124, 24, 142, 191, 107, 1, 150, 20, 16, 170, 223,
  ]);
  keypair = solanaWeb3.Keypair.fromSecretKey(secretKey);
  console.log("Connected to wallet");
};
establishConnection();
connectWallet();
balance();
