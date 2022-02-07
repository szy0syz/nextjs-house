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

- 有必要以后统一下接口还是加个 `I` 在前面吧

```ts
interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
}
```

- 如何使用 `firebase`
  - 记得要用 `cookie` 因为有服务端渲染

```ts
export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const router = useRouter();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          setTokenCookie(token);
          setUser(user);
        } else {
          removeTokenCookie();
          setUser(null);
        }
      });

    return () => {
      cancelAuthListener();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, authenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
```

- `MapBox` vs `Leaflet`
  - `Leaflet` 出生很早，但 `MapBox` 的 `API`/`Usage` 和前者差球不多嘛
  - 两年前就申请了 `MapBox` 的账号直到现在才... 😂

```ts
<ReactMapGL
  {...viewport}
  width="100%"
  height="calc(100vh - 64px)"
  onViewportChange={setViewport}
  ref={(instance) => (mapRef.current = instance)}
  mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
  minZoom={8}
  maxZoom={15}
  mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
></ReactMapGL>
```

- Next.js 全栈项目的目录结构：
  - 从目录结构可以看出，海王框架真的是野心大 🤔
