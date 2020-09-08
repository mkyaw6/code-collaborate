import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './ThemeDropdown.css';

function ThemeDropdown(props){
    const items = [];
    props.themeArr.forEach( (theme) => {
        items.push(<Dropdown.Item key={theme} text={theme} onClick={() => props.onThemeClick(theme)} />)
    })
    return(
    <div data-testid="ThemeDropdown">
        <span className= 'ui label'> Theme: </span>
        <Dropdown className= "ui mini button" text= {props.currTheme}>
        <Dropdown.Menu>
            {items}
        </Dropdown.Menu>
        </Dropdown>
    </div>
    )
}

export default ThemeDropdown