const ffmpeg = require('ffmpeg')

// ! Do not give any song name with a space inside it
const converter = (pathToVideo, songName) => {
    
    try {

        // * Creating a new instance
        var process = new ffmpeg(pathToVideo);
        process.then(function (video) {

            // * Callback mode
            video.fnExtractSoundToMP3(`./${songName}.mp3`, (error, file) => {

                // * Successfully done
                if (!error) console.log('Audio file: ' + file)
            });
        }, error => {
            console.error('Error: ' + error)
        });
    } catch (error) {
        console.error(error.code);
        console.debug(error.msg);
    }
}

module.exports = converter