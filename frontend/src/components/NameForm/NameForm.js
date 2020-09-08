import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import './NameForm.css';

function NameForm(props){
    //state hook to make form controlled
    const [userName, setUserName] = useState('');

    //handler for form submission
    function handleSubmit(){
        props.setUser(userName);
        props.setLoggedIn(true);
        props.socket.emit('newUser', userName);
    }
    var nameFormOutput
    //conditional rendering based on whether user is logged in
    if(props.loggedIn){
        nameFormOutput = <div data-testid="NameFormTrue"></div>
    } else{
        nameFormOutput = 
        <div data-testid="NameFormFalse" className='name-form'>
            <div className='name-form-inner'>
                <Form>
                    <Form.Field>
                        <h1>Enter Display Name</h1>
                        <input data-testid='input' placeholder='John Smith' onChange= {(event) => setUserName(event.target.value)} />
                    </Form.Field>
                    <Button data-testid='submitButton' type='submit' onClick={handleSubmit}> Submit </Button>
                </Form>
            </div>
        </div>
    }
    return(
        nameFormOutput
    )
}

export default NameForm;