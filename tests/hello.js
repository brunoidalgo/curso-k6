import http from 'k6/http'
import { sleep, check } from 'k6'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "report.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export const options = {
  vus: 10,
  duration: '30s',
}

export default function () {
  const res = http.get('http://localhost:3333')

 check(res, {
    'status should be 200': (r) => r.status === 200
 })


 sleep(1)
}