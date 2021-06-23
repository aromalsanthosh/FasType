import React from 'react'
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = ({words,characters,wpm}) => {
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
                <TypingChallenge selectedParagraph="Hello World !"/>
            </div>
            
        </div>
     );
}
 
export default TypingChallengeContainer;