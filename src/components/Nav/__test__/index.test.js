import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Nav from '..';

afterEach(cleanup);

describe('About component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav></Nav>)
    });

    //snapshot
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav></Nav>);

        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

//describe function is not absolulty necessary for the test to run, used to organize tests into sections labled with element being tested.
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange
        //The query to return the element containing the emoji will look like the following statement:
        const { getByLabelText } = render(<Nav></Nav>);

        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      //getByTestId looks the data-testid attribute name of specified tags
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About Me');
    });
  })


