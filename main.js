import * as grpc from "@grpc/grpc-js";

const client = new grpc.Client("testnet.mirrornode.hedera.com:443", grpc.credentials.createSsl());

const requestData = "0a090800100018db9d8001120408001000"
const requestDataBuffer = Buffer.from(requestData, "hex")

const stream = client.makeServerStreamRequest(
    "/com.hedera.mirror.api.proto.ConsensusService/subscribeTopic",
    (value) => value,
    (value) => value,
    Buffer.from(requestDataBuffer)
    )
    .on("data", (/** @type {Uint8Array} */ data) => {
        console.log(data)
    })
    .on("status", (status) => {
        console.log(status)
    })
    .on("end", () => {
        console.log("end");
    })
    .on("pause", () => {
        console.log("pause");
    })
    .on("error", (err) => {
        console.log(err);
    });
