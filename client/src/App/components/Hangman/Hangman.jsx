import React from "react";

// Import External JS
import Hangmanjs from "./js/Hangmanjs"

const Hangman = () => (

<div className="text-center hero my-5">
    <div classNameName="container">

        {/* Jumbotron */}
        <div className='jumbotron'>
            <div className='container'>
                <h1>Word Guess</h1>
                <h2>Guess the random word and learn!</h2>
                <small>Click any letter to begin...</small>
            </div>
        </div>

        {/* Header */}
        <div className="row">
            <div className="col-lg-12">

                <div className="card card-default">
                    <div className="card-header">
                        <h3 className="card-title"><strong>Word to Guess</strong></h3>
                </div>

        {/* Result */}
            <div className="card-body">

                <h3 id="word-blanks">* * * * * * * * * *</h3>
          
            </div>

        </div>

        {/* Wrong Guesses */}
        <div className="card card-default">

          <div className="card-body">

            <strong>Wrong Guesses: </strong> <span id="wrong-guesses"></span>

          </div>

        </div>

        {/* Guesses Left */}
        <div className="card card-default">

          <div className="card-body">

            <strong>Guesses Left: </strong> <span id="guesses-left">9</span>

          </div>

        </div>

        {/* Wins Left */}
        <div className="card card-default">

          <div className="card-body">

            <strong>Wins: </strong> <span id="win-counter">0</span>

          </div>

        </div>

        {/* Losses */}
        <div className="card card-default">

          <div className="card-body">

            <strong>Losses: </strong> <span id="loss-counter">0</span>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* External Javascript */}

</div>


);

export default Hangman;
