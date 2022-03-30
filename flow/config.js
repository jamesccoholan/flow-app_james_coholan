import { config } from "@onflow/fcl";

config({
  "accessNode.api": "https://access-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "0xProfile": "0x45bd504ddfbe84f3", // The account address where the Profile smart contract lives on Testnet
});
