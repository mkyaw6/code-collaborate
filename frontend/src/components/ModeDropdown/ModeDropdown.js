import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './ModeDropdown.css';

function ModeDropdown(props){
    const items = [];
    props.modeArr.forEach( (mode) => {
        items.push(<Dropdown.Item key={mode} text={mode} onClick={() => props.onModeClick(mode)} />)
    })
    return(
    <div data-testid="ModeDropdown">
        <span className= 'ui label'> Mode: </span>
        <Dropdown className= "ui mini button" text= {props.currMode.toString()}>
        <Dropdown.Menu>
            {items}
        </Dropdown.Menu>
        </Dropdown>
    </div>
    )
}

export default ModeDropdown