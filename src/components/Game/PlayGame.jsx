import React, { useState } from 'react';
import { connect } from 'react-redux';
import { scoreDetails } from "../../Redux/actions"

const PlayGame = ({ updateScoreDetails }) => {
    const [counter, setCounter] = useState(0);
    const handleClick = (e) => {
        setCounter(counter + 1);
        const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
        updateScoreDetails({ userChoice: e.target.value, computerChoice: computerChoice, totalGameCount: counter + 1 })
    }

    return (
        <div>
            <p>Rock, Paper, or Scissors</p>
            <div className="choice_button_wrapper">
                <button onClick={handleClick} value="rock">
                    Rock
        </button>
                <button onClick={handleClick} value="paper">
                    Paper
        </button>
                <button onClick={handleClick} value="scissors">
                    Scissors
        </button>
            </div>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    updateScoreDetails: (payload) => dispatch(scoreDetails(payload)),
});


export default connect(null, mapDispatchToProps)(PlayGame)
