import React from 'react'
import './App.css';
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime =60;

const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";


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

                />
                {/* Footer */}
                <Footer/>
            </div>
        )
    }
}

export default App;