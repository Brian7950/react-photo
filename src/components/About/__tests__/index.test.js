import React from 'react';

// retrive some functions from React Testing Library
import { render, cleanup} from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect';
import About from '..'

//afterEach global function from jest 
afterEach(cleanup)

describe('About component', ()=>{
    //renders About test

    //first test
    //it function, first arg string delcares what's being tested, second arg callback func runs the test
    it('renders', ()=>{
        render(<About></About>)
    });

    //second test
    it('matches snapshot DOM node structure', () =>{
        //render about
        //asFragment function returns snapshot of about component
        const {asFragment} = render(<About></About>);

        //use toMatchSnapShot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    })
})