import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import PlaylistsPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'

function Footer () {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          className='footer__albumLogo'
          src='https://cdn.vox-cdn.com/thumbor/qmVXTgSkdW_AtW6VcQ0kz08cxmY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12529721/6vT0UePvReesJQ8swuzg_USHERRR.0.jpg'
          alt=''
        />
        <div className='footer__songInfo'>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon font-size='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistsPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
        <p>Volume Controls</p>
      </div>
    </div>
  )
}

export default Footer
