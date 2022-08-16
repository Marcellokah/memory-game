import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div className='app-container'>
            <Header />
            <Scoreboard score={score} bestScore={bestScore}/>
            <Gameboard score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} />
        </div>
    );
};

export default App;
