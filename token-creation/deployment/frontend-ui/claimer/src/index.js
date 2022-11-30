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
const deployedContractAddress = "0x603e34A7b86FD0084b718339C9935e62B63A02ab";

// more info on query based requests: https://0xpolygonid.github.io/tutorials/wallet/proof-generation/types-of-auth-requests-and-proofs/#query-based-request
const qrProofRequestJson = {
  id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
  typ: "application/iden3comm-plain-json",
  type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  body: {
    transaction_data: {
      contract_address: deployedContractAddress,
      method_id: "b68967e2",
      chain_id: 1402,
      network: "zkevm"
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
          Claim $ADAM token airdrop on Polygon Mumbai
        </h2>
        <p>
          Proof of Person: You must prove your authenticaton of existence.
        </p>
        <p>
          Complete proof of personhood verification by issuing yourself a Polygon ID claim via{" "}
          <a
            href="https://platform-test.polygonid.com/claim-link/20e11a0a-a4c4-438a-afea-f2fd0ff2cf1d"
            target="_blank"
            rel="noreferrer"
          >
            Prime Toad Project
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
          Twitter:{" "}
          <a
            href="https://twitter.com/tiptape0"
            target="_blank" rel="noreferrer"
          >
            tiptape0
          </a>
        </p>
        <p>
          Polygonscan:{" "}
          <a
            href={`https://mumbai.polygonscan.com/token/${deployedContractAddress}`}
            target="_blank" rel="noreferrer"
          >
            $ADAM airdrop
          </a>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
