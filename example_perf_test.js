import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
    discardResponseBodies: true,
    scenarios: {
        ramping_test: {
            executor: "ramping-vus",
            startVUs: 0,
            stages: [
                { duration: "10s", target: 10 },
                { duration: "20s", target: 100 },
                { duration: "10s", target: 10 },
                { duration: "10s", target: 0 },
            ],
            gracefulRampDown: "0s",
        },
    },
};

export default function () {
    const res = http.get("https://www.google.com");
    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 500ms": (r) => r.timings.duration < 500,
    });
    sleep(0.5);
}
