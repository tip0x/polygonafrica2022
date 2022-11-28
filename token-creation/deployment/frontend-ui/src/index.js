import React from "react";
import { render } from "react-dom";
import { QRCode } from "react-qr-svg";

const styles = {
  root: {
    color: "#2C1752",
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  title: {
    color: "#7B3FE4"
  }
};

// update with your contract address
const deployedContractAddress = "0xe2F822232e4723C11fE6b63A75615Cdf4C85E168";

// more info on query based requests: https://0xpolygonid.github.io/tutorials/wallet/proof-generation/types-of-auth-requests-and-proofs/#query-based-request
const qrProofRequestJson = {
  id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
  typ: "application/iden3comm-plain-json",
  type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  body: {
    transaction_data: {
      contract_address: deployedContractAddress,
      method_id: "b68967e2",
      chain_id: 80001,
      network: "polygon-mumbai"
    },
    reason: "airdrop participation",
    scope: [
      {
        id: 1,
        circuit_id: "credentialAtomicQuerySig",
        rules: {
          query: {
            allowed_issuers: ["*"],
            req: {
              VerifiedPerson: {
                $eq: 1
              }
            },
            schema: {
              url:
                "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/d2a60f64-f309-4fe7-9c2d-94218b07e899.json-ld", //"https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v2.json-ld",
              type: "ProofofPersonHood"
            }
          }
        }
      }
    ]
  }
};

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={styles.root}>
        <h2 style={styles.title}>
          Claim $ADAM token zk airdrop on Polygon Zero Knowledge EVM
        </h2>
        <p>
          Proof of PersonHood: You must prove you are part of polygon community to claim.
        </p>
        <p>
          Complete identity verification by issuing yourself a Polygon ID claim via{" "}
          <a
            href="https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea"
            target="_blank"
            rel="noreferrer"
          >
            Proof of PersonHood
          </a>{" "}
          then scan QR code within Polygon ID app to claim tokens
        </p>

        <div>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify(qrProofRequestJson)}
          />
        </div>
        <br />
        <p>
          zkEVM POE Explorer:{" "}
          <a
            href={`https://mumbai.polygonscan.com/address/${deployedContractAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            Saddamzk-ERC20 $ADAM token zk airdrop
          </a>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
