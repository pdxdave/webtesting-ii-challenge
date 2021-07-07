import React from 'react';


// ** DO NOT FORGET ID'S FOR THE BUTTONS **
// Need more than a name to identify a buttton when testing 
// This is from testing-library.com 
// The ...ByTestId functions in DOM Testing Library use the attribute data-testid by default
const Dashboard = (props) => {
    return (
        <div>
            <h3>Dashboard</h3>
            <button data-testid="strike" onClick={props.handleStrike}>Strike</button>
            <button data-testid="ball" onClick={props.handleBalls}>Ball</button>
            <button data-testid="foul" onClick={props.handleFoul}>Foul</button>
            <button data-testid="hit" onClick={props.handleHit}>Hit</button>
        </div>
    )
}

export default Dashboard;

