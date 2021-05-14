#!/usr/bin/env node

const {pnpPlugin} = require("@yarnpkg/esbuild-plugin-pnp")

require('esbuild').build({
    entryPoints: [`${__dirname}/plugins/release.ts`],
    bundle: false,
    platform: "node",
    outfile: `${__dirname}/plugins/release.js`,
    plugins: [pnpPlugin()],
}).catch(() => process.exit(1))
