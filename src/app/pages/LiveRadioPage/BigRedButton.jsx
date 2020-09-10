import React from 'react';
import styled from 'styled-components';

const PlayerButtonWrapper = styled.div`
  position: relative;
  width: 38px;
  height: 38px;
  background: #b80000;
  border-left-color: #fff;
  float: left;
  #player-border {
    border: solid 2px #fdfdfd;
    border-radius: 50%;
  }
`;

const PlayerButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 12px solid #fff;
  position: relative;
  left: 2px;
`;

const NowPlayingIcon = styled.div`
  width: 16px;
  height: 25px;
`;

const ShortNowPlayingLine = styled.div`
  float: ${props => props.float};
  width: 2px;
  height: 14px;
  margin-top: 4px;
  border: solid 1px #fdfdfd;
  border-radius: 2px;
`;

const LongNowPlayingLine = styled.div`
  width: 2px;
  height: 25px;
  display: inline-block;
  border: solid 1px #fdfdfd;
  border-radius: 2px;
`;

const PlayButtonTextWrapper = styled.div`
  line-height: 40px;
  float: right;
  #play-button-text {
    padding-left: 10px;
  }
`;

export const BigRedPlayingButton = () => {
  return (
    <>
      <PlayerButtonWrapper>
        <PlayerButton>
          <NowPlayingIcon>
            <ShortNowPlayingLine float="left" />
            <LongNowPlayingLine />
            <ShortNowPlayingLine float="right" />
          </NowPlayingIcon>
        </PlayerButton>
      </PlayerButtonWrapper>
      <PlayButtonTextWrapper>Now Playing</PlayButtonTextWrapper>
    </>
  );
};

export const BigRedPauseButton = () => {
  return (
    <>
      <PlayerButtonWrapper>
        <PlayerButton id="player-border">
          <PlayIcon />
        </PlayerButton>
      </PlayerButtonWrapper>
      <PlayButtonTextWrapper>
        <div id="play-button-text">Listen Live</div>
      </PlayButtonTextWrapper>
    </>
  );
};