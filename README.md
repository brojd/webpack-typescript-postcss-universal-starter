# webpack-typescript-postcss-universal-starter

<p>Simple, minimalistic, straightforward and universal starter for any modern JS project.</p>
<p>No framework, testing or authorization. Just Webpack, TypeScript and PostCSS.</p>
<p>The rest is up to you.</p>
<br/><br/>

## When to use

This is a great choice if you want to:

1. Get started with modern web development technologies such as Webpack, TypeScript or PostCSS
2. Configure the project by your own but don't want to start from the scratch
3. Experiment with Webpack, TypeScript or PostCSS features
4. Use Vanilla.js in your project
5. Use JS framework that is not popular and there are no starters that satisfy you
<br/><br/>

## Main features

1. [Webpack 2.1.0](https://webpack.js.org/) as a module bundler
2. [TypeScript 2.1.6](https://www.typescriptlang.org/) - typed superset of JavaScript
3. [PostCSS](http://postcss.org/) - to enable awesome future CSS features, automatically add vendor prefixes,
minify and optimize your CSS files (among others)<br/><br/>
Plugins used:
 * [cssnext](http://cssnext.io/)
 * [css-mqpacker](http://cssnext.io/)
 <br/><br/>
4. [Webpack Dev Server 2.1.0](https://github.com/webpack/webpack-dev-server) - to enable live-reloading and provide fast in-memory access to the webpack assets
5. [TSLint 4.4.2](https://palantir.github.io/tslint/) as a linter for the TypeScript
6. [Bootstrap 3.3.7](http://getbootstrap.com/) (as an example how to load third-party libraries, check out [Installation guide](#installation) to easily remove it from your project)
<br/><br/>

## Getting started

### Installation

1. ```fork``` this repository
2. ```git clone``` your fork
3. Run ```npm  i``` in your project root

##### * Removing Bootstrap
1. Remove ```import 'bootstrap/dist/css/bootstrap.css'``` from ```./src/vendor.ts``` file
2. Run ```npm uninstall boostrap --save```


### Usage
1. ```npm start``` to start development server
2. Open your browser on ```http://localhost:3000```
3. ```npm run build``` to bundle files into ```./build``` directory
<br/><br/>

## Project structure
```
.
├── src                                     # source files
│   ├── app                                 # folder for your app
│   ├── boot.ts                             # file for bootstraping application
│   ├── vendor.ts                           # file for for loading 3rd party code
│   ├── index.pcss                          # general styles for the app
│   └── index.html
├── build                                   # compiled files
│   ├── js
│   ├── css
│   ├── media
│   └── index.html
├── webpack.dev.js                          # webpack configuration file for development
├── webpack.prod.js                         # webpack configuration file for production
├── postcss.config.js                       # PostCSS config file
├── tsconfig.json                           # TypeScript configuration
├── tslint.json                             # TSLint rules
.
.
.
```
<br/><br/>

## License
MIT
<br/><br/>

## Author

* Dominik Broj
