---
author: "hypersprite"
title: "npm version"
date: "2018-04-16"
cover: "./images/hs-5953.jpg"
category: "tech"
---


NPM version is a module publishing helper. It has three phases that let you do things before, during and after publishing your. 


All you need to do is decide what you want it to do and add it to the predefined script names. 


```json
"scripts": {
    "test": "jest",
    "lint": "eslint src/* .jsx",
    "build": "rm -rf dst && babel src --out-dir dst --ignore spec.js",
    "preversion": "npm run test && npm run lint",
    "version": "npm run build",
    "postversion": "npm publish && git push"
  },
```
> Note: You need to have a clean repo before you run npm version.


Let's step through what this is doing


Before we run it, we need to decide what semantic versioning we need. NPM has an [article and video here](https://docs.npmjs.com/getting-started/semantic-versioning) about it. 


Here are the rules of thumb
Major: Something that was working is going to break. The major change tells people and automated systems, to look a little closer at this before you upgrade and make sure you understand the implications.
Minor: New features are probably added but nothing should break, but if something does, you know where to look first.
Patch: Mainly fixes, this should not cause any issues with automated updates.


So you've decided on a Patch release? Ok, run


`npm version patch`


* perversion will run call `lint` and `test`, if they pass it will go on.
* version will run and call for a build
* postversion will run and publish and push to git.


But wait, what just happened? Why did we need to push to git?


What is not obvious in the scripts above is that right before it publishes the module, it is going to rev the version number in the package.json file and commit that with the version number as the commit message. 
You can add a message to the commit by running `npm version patch` with `-m "some message about %s`.


You can also setup git tags and other automation. For more see the official [NPM docs](https://docs.npmjs.com/cli/version)