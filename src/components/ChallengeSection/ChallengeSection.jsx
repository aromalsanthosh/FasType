import React from 'react';
import './ChallengeSection.css'
import TestContainer from '../TestContainer/TestContainer';


const ChallengeSection = ({
    selectedParagraph,
    words, 
    characters, 

    wpm, 
    timeRemaining, 
    timerStarted,
    testInfo
}) => {
    return ( 
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take A Speed Test Now !
            </h1>
            <TestContainer 
            timeRemaining={timeRemaining} 
            words={words} 
            characters={characters} 
            wpm={wpm} 
            selectedParagraph={selectedParagraph} 
            timerStarted={timerStarted}
            testInfo={testInfo}
            />
        </div>
     );
}
 
export default ChallengeSection;