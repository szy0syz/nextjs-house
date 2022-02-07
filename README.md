# Next House

## Intro

- TypeScript
- GraphQL & TypeGraphQL
- Prisma & Postgres
- Apollo Client & Server
- Firebase Authentication
- Mapbox
- Cloudinary Image Uploads
- Vercel Deployment

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
  ],
  [
    "@babel/plugin-proposal-class-properties",
    {
      "loose": true
    }
  ],
  "babel-plugin-parameter-decorator"
]
```
