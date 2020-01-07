# node package managment

Start node project from scratch
```
npm init [-y]
```

Get list of globally installed packages
```
npm list -g --depth 0
```
List outdated global packages
```
npm outdated -g --depth=0
```
Upgrade global package
```
npm update -g create-react-app
```
Upgrade global package to latest (major) version
```
npm install -g create-react-app@latest
```

## npm scoped packages

Scoped Packages is a way to group related npm packages together, much like namespaces. This packages group is connected by a “scope” and in fact - it’s perfect for organizations and users
We don’t have to switch the npm registry in order to install and publish the packages - we assign a specific registry for the scope.

Scope name begins with @ and followed by a slash.

```
npm init --scope=sample-scope
```

To assign the scope with a private registry, use:
```
npm config set @sample-scope:registry http://sample-registry.com
```

publish packages
```
npm publish --access public
```

install scoped package in another project
```
npm install @sample-scope/sample-package
```

# node modules

BAAPAN https://github.com/dpjayasekara/baapan
```
npm install -g baapan
baapan
```