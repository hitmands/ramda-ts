# ramda-ts

<https://github.com/ramda/ramda> @ Typescript

--

Out of the back of <https://github.com/ramda/ramda/issues/2976>,
and with the ultimate goal of providing a type-safe developer experience
to those folks like me that love [Ramda](https://ramdajs.com).

- For a better understanding of the problem statement,
  I'd refer to <https://github.com/ramda/ramda/issues/2976>

## How could this work?

To the community to find out, it'd very much depend on everyone's commitment.
Probably the same distributed model where every new fix/feature is added
incrementally by who care the most, Ramda users.

## Goal

- Typesafe Developer Experience
- Reconcile different solutions like <https://github.com/typed-typings/npm-ramda/issues/163>

## Getting Started

```shell
git clone https://github.com/hitmands/ramda-ts.git && cd ramda-ts && yarn install
```

```shell
# To create a new function
yarn scaffold functionName # --dry-run # --force
```

```shell
# To comply with the Code Style
yarn prettier . --write && yarn eslint . --fix
```

```shell
# To run the unit test suite
yarn test # --watch
```

```shell
# To transpile the Typescript to Ecmascript
yarn transpile:esnext # -w
```
