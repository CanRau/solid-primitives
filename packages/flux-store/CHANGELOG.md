# @solid-primitives/flux-store

## 0.0.2

### Patch Changes

- 3fad3789: Revert from publishing separate server, development, and production builds that has to rely on export conditions
  to publishing a single build that can be used in any environment.
  Envs will be checked at with `isDev`and `isServer` consts exported by `"solid-js/web"` so it's still tree-shakeable.

## 0.0.100

- Initial commit and [**PR**](https://github.com/solidjs-community/solid-primitives/pull/327).
