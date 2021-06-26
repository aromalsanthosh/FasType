import React from 'react'
import './App.css';
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime =60;

//const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";


class App extends React.Component{
    state={
        selectedParagraph: "My Name is Aromal",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: [],

    }

    componentDidMount() {
        // fetch(ServiceUrl)
        //     .then(response => response.text())
        //     .then(data =>{
        //         console.log("APi response is ",data);
        //         this.setState({selectedParagraph: data});

        //     });

        const selectedParagraphArray= this.state.selectedParagraph.split("");
        console.log("Splitted Array-",selectedParagraphArray);

        const testInfo = selectedParagraphArray.map(selectedLetter =>{
            return{
                testLetter: selectedLetter,
                status: "notAttempted",
            }
        });

        this.setState({testInfo: testInfo})



        
    }

    startTimer=()=>{
        this.setState({timerStarted: true});
        
        const timer = setInterval(()=>{
            if(this.state.timeRemaining>0){
                //Change WPM
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0 
                ? (this.state.words/timeSpent)*TotalTime
                : 0;

                this.setState({
                    timeRemaining: this.state.timeRemaining-1,
                    wpm: parseInt(wpm)
                });
            } else{
                clearInterval(timer)
            }
            
        },1000)
    }

    handleUserInput = (inputValue) => {
        if(!this.state.timerStarted) this.startTimer();
        //console.log(inputValue);
    };



    render(){
        console.log("Render called");

        console.log("TestInfo-", this.state.testInfo);
        

        return(
            
            <div className="app">
                {/* Nav Section */}
                <Nav/>

                {/* Landing Page */}
                <Landing/>
                {/* Challenge Section */}
                <ChallengeSection
                        selectedParagraph={this.state.selectedParagraph}
                        words={this.state.words}
                        characters={this.state.characters}
                        wpm={this.state.wpm}
                        timeRemaining={this.state.timeRemaining}
                        timerStarted={this.state.timerStarted}
                        testInfo={this.state.testInfo}
                        onInputChange ={this.handleUserInput}

                />
                {/* Footer */}
                <Footer/>
            </div>
        )
    }
}

export default App;