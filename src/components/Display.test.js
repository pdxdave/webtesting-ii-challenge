import React from 'react';

// to use the testing libary, install using npm
// npm i @testing-library/react -D
import { render } from '@testing-library/react';

// Don't forget to import the document you're testing against
import Display from './Display'


describe('<Display>', () => {
    // this is looking for the balls output
    it("displays the ball count", () => {
        const { getByText } = render ( <Display balls={0} />)
        getByText(/balls: 0/i)
    })
    it("displays the strikes count", () => {
        const { getByText } = render (<Display strikes={0} />)
        getByText(/strikes: 0/i)
    })
})

// The process
// 1. Describe will surround the tests inside the specific component.
// 2. Start with it, then the description of the test. Follow
// with a callback.  getByText is from the testing-library.  Here it'll
// get the first word I'm looking for, in this case, 'balls: 0'
// It uses getByText with Regex.  In this scenario, it is case insensitive.