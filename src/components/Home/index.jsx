import React from 'react';
import CurrentGameResult from '../Game/CurrentGameResult';
import PlayGame from '../Game/PlayGame';
import TopBar from '../TopBar';


const Home = () => {
    return (<div>
        <TopBar />
        <PlayGame />
        <CurrentGameResult />
    </div>);
}

export default Home;