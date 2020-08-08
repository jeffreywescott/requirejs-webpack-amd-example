# requirejs-webpack-amd-example

This is a _very simplistic_ example of mixing RequireJS and Webpack in order to allow for a "federated front-end" (a.k.a., micro-frontend), _without_ duplicating dependencies.

There are two sub-folders:
- `shell`: this is the "shell" of our app, which (asynchronously) loads the federated "remote" front-end
- `remote`: this is just a bundle, built as AMD, that gets asynchronously loaded and used by the "shell"

This example is built using React, but presumably different frameworks could work with a similar approach.

To run this example:

1. Open two terminal windows (or tabs).
2. In one tab, go to the `shell` folder, and type `yarn start` (<-- should default to port 8080>)
3. In another tab, go to the `remote` folder, and type `yarn start` (<-- should default to port 8081>)
4. Visit http://localhost:8080

## Why?

I'm not going to go into a justification for federated front-ends here. You can [read more here](https://micro-frontends.org/) if you're really interested.

## How does it work?

It's a bit weird, honestly, but it's mostly just a matter of configuring Webpack and RequireJS correctly to pull it all together.

### In the Shell

- We have a `requirejs-config.js` file that tells RequireJS where to find the remote, as well has how _any dependencies that are used by the remote_ (e.g., in this case, `react` and `react-dom`)
- In `webpack-config.js`, we:
  - add additional key-value pairs to the `entry` object for all of the dependencies that we want to externalize to be shared between both the shell and the remotes
  - for each additional key-value pair we added in the `entry` object, we list that same module identifier in the `externals` array
  - in the `output` section, we name the files and modules dynamically (using `[name]`), and tell webpack to use AMD modules (with the `libraryTarget` directive) rather than the default
- In `src/app.js`, you can see where `requirejs` is invoked to dynamically load the remote module

### In the Remote

- In `webpack-config.js`, we:
  - list out only our _actual_ entry points in the `entry` object
  - in the `output` section, we name the files and modules dynamically (using `[name]`), and tell webpack to use AMD modules (with the `libraryTarget` directive) rather than the default
  - list any dependencies that we plan to get from the shell in the `externals` array

## Notes

- It may be possible to use a different (perpahs lighter-weight?) AMD loader instead of RequireJS.
- This approach leaves it up to the developers of the "shell" and the "remote" to sort out a process to ensure that the dependencies remain in sync.

## License

See the [LICENSE](./LICENSE) file.