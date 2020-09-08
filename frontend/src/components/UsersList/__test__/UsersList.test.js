import React from 'react';
import { render, screen } from '@testing-library/react';
import UsersList from '../UsersList';
import '@testing-library/jest-dom/extend-expect';

test('renders UsersList correctly', () => {
    const testUser = 'test1';
    const testAllUsers = ['test2', 'test3'];
    const testSetAllUsers = jest.fn();

    render(<UsersList 
        user = {testUser}
        allUsers = {testAllUsers} 
        setAllUsers= {testSetAllUsers}/>);
    
    const userLabelTag = screen.getByText("Logged in as:");
    const allUsersLabelTag = screen.getByText("Active Collaborators:");
    const userTag = screen.getByTestId('user');
    const allUsersTag = screen.getAllByTestId('allUsers');

    //test to see if User labels renders correctly
    expect(userLabelTag).toBeInTheDocument();
    expect(allUsersLabelTag).toBeInTheDocument();

    //test to see if current user renders correctly
    expect(userTag.textContent).toBe(testUser);

    //test to see if other users render correctly
    const testAllUsersRendered = allUsersTag.map( (item) => item.textContent );
    expect(testAllUsersRendered).toStrictEqual(testAllUsers);
});