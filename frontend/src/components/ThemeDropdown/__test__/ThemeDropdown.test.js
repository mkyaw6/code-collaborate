import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeDropdown from '../ThemeDropdown';
import '@testing-library/jest-dom/extend-expect';

test('renders ThemeDropdown correctly', () => {
    const testCurrTheme = 'test1';
    const testThemeArr = ['test2', 'test3'];
    const testOnThemeClick = jest.fn()

    render(<ThemeDropdown 
        currTheme = {testCurrTheme}
        themeArr = {testThemeArr} 
        onThemeClick= {testOnThemeClick}/>);
    const themeLabelTag = screen.getByText("Theme:");
    const currThemeTag = screen.getByText(testCurrTheme); 

    //test to see if Theme label renders correctly
    expect(themeLabelTag).toBeInTheDocument()

    //test to see if current Theme renders correctly
    expect(currThemeTag).toBeInTheDocument()

    //test to see if Themes render correctly when dropdown is clicked
    fireEvent.click(screen.getByText(testCurrTheme));
    testThemeArr.forEach( (testItem) => {
        const testItemTag = screen.getByText(testItem);
        expect(testItemTag).toBeInTheDocument();
    })

    //test to see if the mock function is called on clicking a dropdown item
    testThemeArr.forEach( (testItem) => {
        const testItemClickTag = screen.getByText(testItem);
        fireEvent.click(testItemClickTag);
        expect(testOnThemeClick).toHaveBeenCalled();
    })

});