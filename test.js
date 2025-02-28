
let WEBHOOK='hcp_5686fc8e2e2e25179feacb5abe324d43'

let timestamp = 1740771793

let body = {
  data: 'studd',
  idk: 'more'
}



const expectedSignature = crypto.createHmac("sha256", WEBHOOK).update(timestamp.json(body)).digest("hex");

console.log('result:', expectedSignature)