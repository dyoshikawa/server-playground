# Rubyサーバ

```
docker run --rm -p 3000:3000 -v $(pwd):/src -m "10m" ruby:2.6-alpine ruby /src/http.rb
```

# Rubyサーバ (マルチスレッド)

```
docker run --rm -p 3000:3000 -v $(pwd):/src -m "10m" ruby:2.6-alpine ruby /src/http_multi_threads.rb
```

# Nodeサーバ

```
docker run --rm -p 3000:3000 -v $(pwd):/src -m "10m" node:alpine node /src/http.js
```

# リクエスト

```
node client.js
```
