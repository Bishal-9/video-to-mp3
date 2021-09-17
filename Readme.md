# Offline video to audio converter (video-to-mp3-converter)

Fast, minimalist file framework for [node](http://nodejs.org).

Offline video to audio converter. Easy to use.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install @bishal-9/video-to-mp3-converter
```

## Examples

Most minimal video converter:

```js
const converter = require('@bishal-9/video-to-mp3-converter')

const pathToVideo = ''
const songName = ''

converter(pathToVideo, songName)
```

**NOTE:**  Do not pass any song name with a space inside it.