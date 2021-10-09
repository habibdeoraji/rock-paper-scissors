import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { updateResultsArray } from '../../Redux/actions';
import "./game.css"



const CurrentGameResult = ({ scoreCard, updatedResultsArray, results }) => {
    const { userChoice, computerChoice, totalGameCount } = scoreCard
    const [currentGameResult, setCurrentGameResult] = useState()


    const currentResultFunction = () => {
        console.log(userChoice, computerChoice);
        if ((userChoice === computerChoice) && userChoice !== '') {
            console.log('This is always true')
            setCurrentGameResult('Draw');

        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log('w')
            results.userScore += 1
            updatedResultsArray(results)
            setCurrentGameResult('Win');
        } else if ((userChoice === "scissors" && computerChoice === "rock") ||
            (userChoice === "rock" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "scissors")) {
            console.log('l')
            results.computerScore += 1
            updatedResultsArray(results)
            setCurrentGameResult('Lose');
        }
    };

    useEffect(() => {
        currentResultFunction()
    }, [scoreCard])




    return (
        <div className="game_card">
            <h1>Total round: {totalGameCount}</h1>
            <div className="current_game_score_comparison">
                <div className="current_game_user_score_card">
                    <p>You</p>
                    <p>
                        <span>Score: </span>{results.userScore}
                    </p>
                </div>
                <p>vs</p>
                <div className="current_game_user_score_card">
                    <p>Computer</p>
                    <p>
                        <span>Score: </span>{results.computerScore}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="choice_card_wrapper">
                <div>
                    <p>You played <span style={{ fontWeight: 'bold' }}>{userChoice}</span> </p>
                    <i
                        className={`fas fa-hand-${userChoice}`}
                        style={{ fontSize: "100px", color: "blue" }}
                    ></i>
                </div>
                <div>
                    {<p>The computer played <span style={{ fontWeight: 'bold' }}>{computerChoice}</span> </p>}
                    {computerChoice === '' ? <p style={{ minWidth: '120px', height: "120px" }}></p> : <i
                        className={`fas fa-hand-${computerChoice}`}
                        style={{ fontSize: "100px", color: "blue" }}
                    ></i>}
                </div>
            </div>
            { currentGameResult === 'Draw' && <h2>Game Draw</h2>}
            { currentGameResult === 'Win' && <h2>You Win!</h2>}
            { currentGameResult === 'Lose' && <h2>You Lose!</h2>}

        </div>
    );
}

const mapStateToProps = (state) => ({
    scoreCard: state.scoreCard,
    results: state.results
})



const mapDispatchToProps = (dispatch) => ({
    updatedResultsArray: (payload) => dispatch(updateResultsArray(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGameResult);