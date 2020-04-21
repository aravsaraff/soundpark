const express = require('express');
const auth = require('./auth');
const queue = require('./queue');
const spotify = require('./spotify');

const router = express.Router();

// Login Routes
router.post('/set_uname', auth.setUsername);

// Spotify Routes
router.get('/playNext', spotify.playNextSong);
router.get('/playPrev', spotify.playPrevSong);
router.get('/currentlyPlaying', spotify.getCurrentlyPlaying);
router.get('/searchTrack', spotify.searchTrack);

// Auth Routes
router.get('/login', auth.login)
router.get('/callback', auth.callback)
router.get('/refresh_token', auth.refresh_token)

// Queue Routes
router.post('/add_track', queue.addTrack)
router.get('/current', queue.showCurrent)
router.get('/next', queue.showNext)
router.get('/all', queue.showAll)
router.get('/remove', queue.removeTrack)

module.exports = router