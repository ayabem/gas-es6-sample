gas-es6-sample
====

using transpiled es6 in google apps script

set up Clasp
----

**install Clasp**

```bash
npm install @google/clasp -g
clasp login
```
**bind GAS project**

```bash
clasp create gas-es6-sample
```

deploy to GAS
----

**build for GAS**

```bash
npm run gas_build
# default output path: build/main.js
```

**upload to GAS**

```bash
clasp push
clasp open
```

testing
----

```bash
npm run test
```
