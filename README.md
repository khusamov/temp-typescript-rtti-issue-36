# temp-typescript-rtti-issue-36

https://github.com/typescript-rtti/typescript-rtti/issues/36

Run
---

```
yarn
yarn start
```

Error (see browser console)
---------------------------

```
reflect.ts:321 Uncaught TypeError: Type has kind any, expected interface
    at ReflectedAnyRef.as (reflect.ts:321:36)
    at Object.h7u1C.reflect-metadata (index.ts:31:90)
    at newRequire (index.b71e74eb.js:71:24)
    at index.b71e74eb.js:122:5
    at index.b71e74eb.js:145:3
```