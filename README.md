```
docker run --rm -p 3000:3000 -v $(pwd):/src -m "10m" ruby:2.6-alpine ruby /src/http.rb
```

```
docker run --rm -p 3000:3000 -v $(pwd):/src -m "10m" ruby:2.6-alpine ruby /src/http_multi_threads.rb
```

```
docker run --rm -p 3000:3000 -v $(pwd):/src -m "10m" node:alpine node /src/http.js
```