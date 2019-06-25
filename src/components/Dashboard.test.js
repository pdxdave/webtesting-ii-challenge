import React from 'react';

import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // Need this!!!!

import Dashboard from './Dashboard';
import App from '../App'

describe('<Dashboard />', () => {
   it(" this displays the strike button", () => {
       const { getByText } = render (<Dashboard />);
       getByText(/strike/i)
   })
   it(" this displays the ball button", () => {
       const { getByText } = render (<Dashboard />);
       getByText(/ball/i)
   })
   it(" this displays the foul button", () => {
       const { getByText } = render (<Dashboard />);
       getByText(/foul/i)
   })
   it(" this displays the hit button", () => {
       const { getByText } = render (<Dashboard />);
       getByText(/hit/i)
   })

   // A BIG GOTCHA. Error msg: Unable to find an element with the text: /strikes: 0/i.
   // I was rendering the Dashboard, BUT the props lead back to App.
   it( "this checks that the strike count changes when the strike btn is pressed", () => {
      const { getByText, getByTestId } = render (<App/>);
      getByText(/strikes: 0/i)  // this check is for the strikes output
      const button =  getByTestId(/strike/i) // this check is for the strike button
      fireEvent.click(button) // w/o the id, it doesn't know which button to get
      getByText(/strikes: 1/i) // should this reflect an increment count of 1 ??
   })

})