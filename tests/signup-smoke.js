import http from "k6/http";
import { sleep, check } from "k6";
import uuid from './libs/uuid.js'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "report.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export const options = {
  vus: 1,
  duration: "1m",
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% Das reqs devem responder em até 2s
    http_req_failed: ['rate<0.01'] // Até 1% das requsisições podem ocorer erro
  }
};

//Smoke Test
export default function () {
  const url = "http://localhost:3333/signup";

  const payload = JSON.stringify({
    email: `${uuid.v4().substring(24)}@qa.qacademy.com.br`,
    password: "teste1234"
  });

  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, headers);

  console.log(res.body)

  check(res, {
    "status should be 201": (r) => r.status === 201,
  });

  sleep(1);
}