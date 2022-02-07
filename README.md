# Next House

## Notes

- 为了在 `TypeGraphQL` 中愉快的使用装饰器，得加个 `babel` 的插件才行

```json
"plugins": [
  "babel-plugin-transform-typescript-metadata",
  [
    "@babel/plugin-proposal-decorators",
    {
      "legacy": true
    }
  ],s
  [
    "@babel/plugin-proposal-class-properties",
    {
      "loose": true
    }
  ],
  "babel-plugin-parameter-decorator"
]
```
