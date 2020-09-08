import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('render correct child components', () => {
    render(<App />);
    const LanguageDropdownTag = screen.getByTestId("LanguageDropdown");
    const ModeDropdownTag = screen.getByTestId("ModeDropdown");
    const ThemeDropdownTag = screen.getByTestId("ThemeDropdown");
    const NameFormTag = screen.getByTestId(/NameForm/);

    //Tests if following child components are always rendered.
    //Note AceEditor is not tested because it is imported from external library
    expect(LanguageDropdownTag).toBeInTheDocument();
    expect(ModeDropdownTag).toBeInTheDocument();
    expect(ThemeDropdownTag).toBeInTheDocument();
    expect(NameFormTag).toBeInTheDocument();
})