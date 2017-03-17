const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');

const { NoEmitOnErrorsPlugin, LoaderOptionsPlugin } = require('webpack');
const { GlobCopyWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const webpack = require('webpack');
const { AotPlugin } = require('@ngtools/webpack');

const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = ["inline","polyfills","sw-register","scripts","styles","vendor","main"];
const baseHref = undefined;
const deployUrl = undefined;



const environmentFiles = {
  'dev': 'environments/environment.ts',
  'prod': 'environments/environment.prod.ts',
  'local': 'environments/environment.local.ts'
};

const prod = process.argv.indexOf('-p') !== -1;
const local = process.argv.indexOf('-l') !== -1;
const dev = process.argv.indexOf('-d') !== -1;






module.exports = function(env) {
  const config = {
    "devtool": "source-map",
    "devServer": {
    "historyApiFallback": true
  },
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "./node_modules"
    ]
  },
  "resolveLoader": {
    "modules": [
      "./node_modules"
    ]
  },
  "entry": {
    "main": [
      "./src/main.ts"
    ],
    "polyfills": [
      "./src/polyfills.ts"
    ],
    "scripts": [
      "script-loader!./node_modules/jquery/dist/jquery.js",
      "script-loader!./node_modules/tether/dist/js/tether.js",
      "script-loader!./node_modules/bootstrap/dist/js/bootstrap.js"
    ],
    "styles": [
      "./node_modules/bootstrap/dist/css/bootstrap.css",
      "./node_modules/font-awesome/css/font-awesome.css",
      "./node_modules/@swimlane/ngx-datatable/release/index.css",
      "./node_modules/@swimlane/ngx-datatable/release/themes/material.css",
      "./node_modules/@swimlane/ngx-datatable/release/assets/icons.css",
      "./src/styles.css"
    ]
  },
  "output": {
    "path": path.join(process.cwd(), "dist"),
    "filename": "[name].bundle.js",
    "chunkFilename": "[id].chunk.js"
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.js$/,
        "loader": "source-map-loader",
        "exclude": [
          /\/node_modules\//
        ]
      },
      {
        "test": /\.json$/,
        "loader": "json-loader"
      },
      {
        "test": /\.html$/,
        "loader": "raw-loader"
      },
      {
        "test": /\.(eot|svg)$/,
        "loader": "file-loader?name=[name].[hash:20].[ext]"
      },
      {
        "test": /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        "loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.css$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader"
        ]
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.scss$|\.sass$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.less$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.styl$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader",
          "stylus-loader?{\"sourceMap\":false,\"paths\":[]}"
        ]
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.css$/,
        "loaders": ExtractTextPlugin.extract({
  "use": [
    "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
    "postcss-loader"
  ],
  "fallback": "style-loader",
  "publicPath": ""
})
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.scss$|\.sass$/,
        "loaders": ExtractTextPlugin.extract({
  "use": [
    "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
    "postcss-loader",
    "sass-loader"
  ],
  "fallback": "style-loader",
  "publicPath": ""
})
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.less$/,
        "loaders": ExtractTextPlugin.extract({
  "use": [
    "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
    "postcss-loader",
    "less-loader"
  ],
  "fallback": "style-loader",
  "publicPath": ""
})
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/bootstrap/dist/css/bootstrap.css"),
          path.join(process.cwd(), "node_modules/font-awesome/css/font-awesome.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/index.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/themes/material.css"),
          path.join(process.cwd(), "node_modules/@swimlane/ngx-datatable/release/assets/icons.css"),
          path.join(process.cwd(), "src/styles.css")
        ],
        "test": /\.styl$/,
        "loaders": ExtractTextPlugin.extract({
  "use": [
    "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
    "postcss-loader",
    "stylus-loader?{\"sourceMap\":false,\"paths\":[]}"
  ],
  "fallback": "style-loader",
  "publicPath": ""
})
      },
      {
        "test": /\.ts$/,
        "loader": "@ngtools/webpack"
      }
    ]
  },
  "plugins": [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new NoEmitOnErrorsPlugin(),
    new GlobCopyWebpackPlugin({
      "patterns": [
        "assets",
        "favicon.ico"
      ],
      "globOptions": {
        "cwd": "./src",
        "dot": true,
        "ignore": "**/.gitkeep"
      }
    }),
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      "template": "./src/index.html",
      "filename": "./index.html",
      "hash": false,
      "inject": true,
      "compile": true,
      "favicon": false,
      "minify": false,
      "cache": true,
      "showErrors": true,
      "chunks": "all",
      "excludeChunks": [],
      "title": "Webpack App",
      "xhtml": true,
      "chunksSortMode": function sort(left, right) {
        let leftIndex = entryPoints.indexOf(left.names[0]);
        let rightindex = entryPoints.indexOf(right.names[0]);
        if (leftIndex > rightindex) {
            return 1;
        }
        else if (leftIndex < rightindex) {
            return -1;
        }
        else {
            return 0;
        }
    }
    }),
    new BaseHrefWebpackPlugin({}),
    new CommonsChunkPlugin({
      "name": "inline",
      "minChunks": null
    }),
    new CommonsChunkPlugin({
      "name": "vendor",
      "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
      "chunks": [
        "main"
      ]
    }),
    new ExtractTextPlugin({
      "filename": "[name].bundle.css",
      "disable": true
    }),
    new LoaderOptionsPlugin({
      "sourceMap": false,
      "options": {
        "postcss": [
          autoprefixer(),
          postcssUrl({"url": (URL) => {
            // Only convert absolute URLs, which CSS-Loader won't process into require().
            if (!URL.startsWith('/')) {
                return URL;
            }
            // Join together base-href, deploy-url and the original URL.
            // Also dedupe multiple slashes into single ones.
            return `/${baseHref || ''}/${deployUrl || ''}/${URL}`.replace(/\/\/+/g, '/');
        }})
        ],
        "sassLoader": {
          "sourceMap": false,
          "includePaths": []
        },
        "lessLoader": {
          "sourceMap": false
        },
        "context": ""
      }
    })
    


  ],
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  }
};
config.plugins = config.plugins||[];
env = env||null;
 if(env != null && env.dev != undefined && env.dev == "true"){
   console.log('dev');
   config.module.rules.push(
            { test: /\.ts$/, loaders: ['@ngtools/webpack'] }
        );
       config.plugins.push(new AotPlugin({
      "mainPath": "main.ts",
      "hostReplacementPaths": {
        'environments/environment.ts': 'environments/environment.dev.ts'
      },
      "exclude": [],
      "tsConfigPath": "./src/tsconfig.app.json",
      "skipCodeGeneration": false
    }),

    new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    screw_ie8: true
                },
                comments: false
            })
); 
  }

  else if(env != null && env.prod != undefined && env.prod == "true"){
    console.log('prod');
    config.module.rules.push(
            { test: /\.ts$/, loaders: ['@ngtools/webpack'] }
        );
       config.plugins.push(new AotPlugin({
      "mainPath": "main.ts",
      "hostReplacementPaths": {
        'environments/environment.ts': 'environments/environment.prod.ts'
      },
      "exclude": [],
      "tsConfigPath": "./src/tsconfig.app.json",
      "skipCodeGeneration": false
    }),

    new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    screw_ie8: true
                },
                comments: false
            })
); 
  }

  else{
    console.log('local');
    
       config.plugins.push(new AotPlugin({
         "mainPath": "main.ts",
      "hostReplacementPaths": {
        'environments/environment.ts': 'environments/environment.ts'
      },
      "exclude": [],
      "tsConfigPath": "./src/tsconfig.app.json",
      "skipCodeGeneration": false
    })
); 
  }
  

return config;
};
