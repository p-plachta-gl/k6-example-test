FROM grafana/k6:latest

WORKDIR /tests

COPY tests/ .

USER root
RUN mkdir -p /logs

ENTRYPOINT [ "sh", "-c" ]
CMD ["k6 run /tests/${TEST_SCRIPT:-test1.js} --out json=/logs/results.json | tee /logs/test_output.log"]
