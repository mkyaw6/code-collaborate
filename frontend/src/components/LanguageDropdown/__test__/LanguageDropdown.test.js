import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageDropdown from '../LanguageDropdown';
import '@testing-library/jest-dom/extend-expect';

test('renders LanguageDropdown correctly', () => {
    const testCurrLang = 'test1';
    const testLangArr = ['test2', 'test3'];
    const testOnLangClick = jest.fn();

    render(<LanguageDropdown 
        currLang = {testCurrLang}
        langArr = {testLangArr} 
        onLangClick= {testOnLangClick}/>);
    
    const langLabelTag = screen.getByText("Language:");
    const currLangTag = screen.getByText(testCurrLang); 

    //test to see if Language label renders correctly
    expect(langLabelTag).toBeInTheDocument()

    //test to see if current language renders correctly
    expect(currLangTag).toBeInTheDocument()

    //test to see if languages render correctly when dropdown is clicked
    fireEvent.click(screen.getByText(testCurrLang));
    testLangArr.forEach( (testItem) => {
        const testItemTag = screen.getByText(testItem);
        expect(testItemTag).toBeInTheDocument();
    })

    //test to see if the mock function is called on clicking a dropdown item
    testLangArr.forEach( (testItem) => {
        const testItemClickTag = screen.getByText(testItem);
        fireEvent.click(testItemClickTag);
        expect(testOnLangClick).toHaveBeenCalled();
    })

});