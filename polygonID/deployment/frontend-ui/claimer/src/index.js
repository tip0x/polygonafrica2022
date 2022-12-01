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
const deployedContractAddress = "0x73C73978cf5b81799AD589Ff22E1A2e9352D8e33";

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
      network: "mumbai"
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
              Role: {
                $in: 4
              }
            },
            schema: {
              url:
                "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/3a21c41d-3cdf-40fd-a872-5a9527def918.json-ld",
              type: "POLYGONDAOMEMBER"
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
          Claim Prime Toad Token ($PTT) airdrop on Polygon zkEVM
        </h2>
        <p>
          Mode of Verification: You must prove your role as a polygon DAO member to be eligible to mint token.
        </p>
        <p>
          Complete proof of polygon DAO member by issuing yourself a Polygon ID claim via{" "}
          <a
            href="https://platform-test.polygonid.com/claim-link/20e11a0a-a4c4-438a-afea-f2fd0ff2cf1d"
            target="_blank"
            rel="noreferrer"
          >
            Prime Toad Project
          </a>{" "}
          </p>
          <p>
          then scan this QR code within Polygon ID app to claim tokens
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
          Polygonscan:{" "}
          <a
            href={`https://mumbai.polygonscan.com/address/${deployedContractAddress}`}
            target="_blank" rel="noreferrer"
          >
            $PTT Scan
          </a>
        </p>
        <p>
          Project Team Lead:{" "}
          <a
            href="https://twitter.com/tiptape0"
            target="_blank" rel="noreferrer"
          >
            tiptape0
          </a>
        </p>
        
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
