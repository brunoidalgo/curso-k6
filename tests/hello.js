import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1,
  duration: '10s',
};
export default function () {
  http.get('http://localhost:3333');
  sleep(1);
}