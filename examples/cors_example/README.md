CORS Cross-Origin Resource Sharing

A Cross-Origin resource fails if it’s:

* to a different domain
* to a different subdomain
* to a different port
* to a different protocol

```
curl -v -H "Origin: https://github.com" http://localhost:3000/hello
curl -v -X OPTIONS -H "Origin: https://github.com" http://localhost:3000/hello
```