import {Howl, Howler} from 'howler';

export default {
    play() {
        var sound = new Howl({
            src: ['dist/audio/woof.mp3']
        });
        sound.play();

        console.log('woof woof.');
    }
}