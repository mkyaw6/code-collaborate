import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModeDropdown from '../ModeDropdown';
import '@testing-library/jest-dom/extend-expect';

test('renders ModeDropdown correctly', () => {
    const testCurrMode = 'test1';
    const testModeArr = ['test2', 'test3'];
    const testOnModeClick = jest.fn()

    render(<ModeDropdown 
        currMode = {testCurrMode}
        modeArr = {testModeArr} 
        onModeClick= {testOnModeClick}/>);
    
    const modeLabelTag = screen.getByText("Mode:");
    const currModeTag = screen.getByText(testCurrMode); 

    //test to see if Mode label renders correctly
    expect(modeLabelTag).toBeInTheDocument()

    //test to see if current Mode renders correctly
    expect(currModeTag).toBeInTheDocument()

    //test to see if Modes render correctly when dropdown is clicked
    fireEvent.click(currModeTag);
    testModeArr.forEach( (testItem) => {
        const testItemTag = screen.getByText(testItem);
        expect(testItemTag).toBeInTheDocument();
    })

    //test to see if the mock function is called on clicking a dropdown item
    testModeArr.forEach( (testItem) => {
        const testItemClickTag = screen.getByText(testItem);
        fireEvent.click(testItemClickTag);
        expect(testOnModeClick).toHaveBeenCalled();
    })

});