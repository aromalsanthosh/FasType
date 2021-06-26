import React from 'react'
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = ({
    selectedParagraph,
    words, 
    characters, 
    wpm, 
    timeRemaining, 
    timerStarted,
    testInfo,
    onInputChange
}) => {
    return ( 
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>
                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                {/* Speed */}
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm}/>
            </div>

            {/* Real Challenge Section */}
            <div className="typewriter-container">
                <TypingChallenge 
                timeRemaining={timeRemaining} 
                timerStarted={timerStarted} 
                selectedParagraph={selectedParagraph}
                testInfo={testInfo}
                onInputChange={onInputChange}
                    
                />
            </div>
            
        </div>
     );
}
 
export default TypingChallengeContainer;