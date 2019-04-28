import React, { Component } from 'react';
import Projects from './components/Projects'

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>My name is Mathias, I'm a react n00b</p>
                <p>Learning is almost always fun</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>sadfasdfasdf</p>
                        <p>OMEGALUL!</p>
                        <p>LOLOMEGA!</p>
                        <button onClick={this.toggleDisplayBio}> Show less </button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}> Read more </button>
                        </div>
                    )
                }
                <hr />
                <Projects />
            </div>
        )
    }
}

export default App;
