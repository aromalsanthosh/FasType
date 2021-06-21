import React from 'react'
import './App.css';
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing';
class App extends React.Component{
    render(){
        return(
            
            <div className="app">
                {/* Nav Section */}
                <Nav/>

                {/* Landing Page */}
                <Landing/>
                {/* Challenge Section */}

                {/* Footer */}
            </div>
        )
    }
}

export default App;