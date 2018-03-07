cheer
title: Day 1
tag: Music
cheer

# What's the "theory" of music?

I have to say, western culture made music harder as it should be.

The origin of sound is the existence of different frequencies.

We have decorated it too much.

Is there a more intuitive, simpler and better substitution for this music theory?

## I'm disgusting

I hate myself. I'm so disgusting.

I love this loathful me.

I want to write, I want to sing, I want to tell, I want to be seen, I hate such silence.

<audio id="sound" controls preload="none" hidden><source src="assets/Demo1.ogg" type="audio/ogg"></audio>

 
## A Music Player ~
<button type="button" class="play_button" onClick="play()">play</button>
<button type="button" class="pause_button" onClick="pause()">pause</button>
<button type="button" class="replay_button" onClick="replay()">replay</button>

<script>
  music = document.getElementById("sound")

  function play() {
    music.play()
  }

  function pause() {
	music.pause()
  }

  function replay() {
	music.currentTime = 0
    music.play()
  }

</script>
