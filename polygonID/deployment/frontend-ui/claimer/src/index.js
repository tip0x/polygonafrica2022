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
const deployedContractAddress = "0xA08fAA759Dc286611e6a1c42c857F6022A7bbcf0";

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
              "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/8826487d-8195-4b51-a926-cb4783835dd3.json-ld",
              type: "ProofofExistence"
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
          
          Claim Prime Toad Token ($PTT) airdrop on Polygon Mumbai
        </h2>
        <p>
          Mode of Verification: You must prove authentication of verified person to be eligible to mint token.
        </p>
        <p>
          Complete proof of verified person by issuing yourself a Polygon ID claim via{" "}
          <a
            href="https://platform-test.polygonid.com/claim-link/3c35f8cc-02e0-40c9-8de6-46c5f0d5051a"
            target="_blank"
            rel="noreferrer"
          >
            Prime Toad Claimer
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
