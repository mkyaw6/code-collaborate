import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './LanguageDropdown.css';

function LanguageDropdown(props){
    const items = [];
    props.langArr.forEach( (lang,ind) => {
        items.push(<Dropdown.Item key={ind} text={lang} onClick={() => props.onLangClick(lang)} />)
    })
    return(
    <div data-testid="LanguageDropdown">
        <span className = "ui label"> Language: </span>
        <Dropdown className= "ui mini button" text= {props.currLang}>
        <Dropdown.Menu>
            {items}
        </Dropdown.Menu>
        </Dropdown>
    </div>
    )
}


export default LanguageDropdown