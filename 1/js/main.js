const sounds = {
  65: 'clap',
  83: 'hihat',
  68: 'kick',
  70: 'openhat',
  71: 'boom',
  72: 'ride',
  74: 'snare',
  75: 'tom',
  76: 'tink'
};

const drums = {};

const isValidDrum = key => !!drums[key];

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("keydown", e => {

    for( key in sounds )
      new Drum(key, sounds[key], drums);


    if( isValidDrum( e.keyCode ) ) {
      drums[e.keyCode].play();
    }
  })
});
