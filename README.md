# k6-example-test

## Manual

Kontener odpalamy poprzez komendę:

```
docker run --rm -v $(pwd)/logs:/logs -e TEST_SCRIPT=test1.js k6-perf-test
```

Zmienna środowiskowa TEST_SCRIPT wybiera nam test do wywołania
