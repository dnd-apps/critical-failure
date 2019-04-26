const {
  FuseBox,
  JSONPlugin,
  VueComponentPlugin,
  QuantumPlugin,
  HTMLPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  WebIndexPlugin
} = require('fuse-box');
const { task, src, exec } = require('fuse-box/sparky');

const fs = require('fs');
const path = require('path');
const glob = require('glob');

let fuse;
let isProduction = false;
const assetPath = path.join(__dirname, './src/assets');

task('set-prod', () => {
  isProduction = true;
});

task('clean', async () => await src('./dist').clean('dist/'));

task('copy-assets', async () => {
  return await glob(assetPath + '/**/*.*', (err, files) => {
    if (err) throw err;
    files.forEach(source => {
      const dest = source.replace('/src/', '/dist/');
      if (!fs.existsSync(path.dirname(dest))) {
        fs.mkdirSync(path.dirname(dest));
      }
      fs.copyFile(source, dest, err => {
        if (err) throw err;
      });
    });
  });
});

task('config', () => {
  fuse = FuseBox.init({
    homeDir: './src',
    target: 'browser@es6',
    output: 'dist/$name.js',
    sourceMaps: !isProduction,
    useTypescriptCompiler: true,
    allowSyntheticDefaultImports: true,
    plugins: [
      VueComponentPlugin({
        style: [
          SassPlugin({
            importer: true,
            outputStyle: 'compressed'
          }),
          CSSResourcePlugin(),
          CSSPlugin()
        ]
      }),
      JSONPlugin(),
      WebIndexPlugin({
        template: 'src/index.html'
      }),
      isProduction &&
        QuantumPlugin({
          bakeApiIntoBundle: 'vendor',
          uglify: true,
          treeshake: true
        })
    ]
  });

  if (!isProduction) {
    fuse.dev({
      fallback: 'index.html',
      port: 8000
    });
  }

  const vendor = fuse.bundle('vendor').instructions('~ main.ts');

  const app = fuse.bundle('app').instructions('> [main.ts]');

  if (!isProduction) {
    app.watch().hmr();
  }
});

task('default', async () => {
  await exec('clean', 'copy-assets', 'config');
  return fuse.run();
});

task('dist', async () => {
  await exec('clean', 'copy-assets', 'set-prod', 'config');
  return fuse.run();
});
