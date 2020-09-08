import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NameForm from '../NameForm';
import '@testing-library/jest-dom/extend-expect';

test('renders NameForm correctly', () => {

    const testSetLoggedIn = jest.fn()
    const testSetUser= jest.fn()
    const testSocket = {emit : jest.fn()}

    render(<NameForm 
        setLoggedIn = {testSetLoggedIn}
        setUser = {testSetUser} 
        socket= {testSocket}
        loggedIn = {false}/>);
    
    const formLabelTag = screen.getByText("Enter Display Name");
    const inputTag = screen.getByTestId("input");
    const submitButtonTag = screen.getByTestId("submitButton");

    //test to see if NameForm label renders correctly
    expect(formLabelTag).toBeInTheDocument();

    //test to see if input form renders correctly and has right placeholder text
    expect(inputTag.placeholder).toBe("John Smith");
    
    //test to see if letters typed in the input are displayed
    fireEvent.change(inputTag, { target: { value: 'Test Entry' } });
    expect(inputTag.value).toBe('Test Entry');

    //test to see if the mock function is called on clicking a dropdown item
    fireEvent.click(submitButtonTag);
    expect(testSetUser).toHaveBeenCalled()

    render(<NameForm 
        setLoggedIn = {testSetLoggedIn}
        setUser = {testSetUser} 
        socket= {testSocket}
        loggedIn = {true}/>);
        
    //test to see if the NameForm is hidden when user is logged in
    expect(screen.getByTestId("NameFormTrue")).toBeInTheDocument();
});