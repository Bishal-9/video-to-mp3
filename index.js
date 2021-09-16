const ffmpeg = require('ffmpeg')

const pathToVideo = ''

try {
    var process = new ffmpeg(pathToVideo);
    process.then(function (video) {
        // Callback mode
        video.fnExtractSoundToMP3('./song.mp3', (error, file) => {
            if (!error)
                console.log('Audio file: ' + file)
        });
    }, error => {
        console.log('Error: ' + error)
    });
} catch (error) {
    console.log(error.code);
    console.log(error.msg);
}