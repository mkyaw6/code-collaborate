import React from 'react'
import { List, Icon } from 'semantic-ui-react'
import './UsersList.css'

function UsersList(props){

    //generates list of all users from allUsers prop
    const allUsers = props.allUsers.map( (el,ind) => {
        return (
        <List.Item key= {ind}>
            <List.Content>
                <List.Header>
                        <Icon  color='green' name='circle'/>
                        <span data-testid="allUsers">
                            {el}
                        </span>
                    </List.Header>
            </List.Content>
        </List.Item>)
    });

    return(
        <div data-testid="UsersList" className = 'users-list'>
            <List divided relaxed>
                <h3>Logged in as:</h3>
                <List.Item>
                <List.Content>
                    <List.Header>
                            <Icon color='green' name='circle'/>
                            <span data-testid="user">
                                {props.user} 
                            </span>
                    </List.Header>
                </List.Content>
                </List.Item>
                <h3>Active Collaborators:</h3>
                {allUsers}
            </List>
        </div>
    )
}

export default UsersList