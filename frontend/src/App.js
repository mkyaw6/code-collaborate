import React, { useState, useEffect } from 'react';
import './App.css';
import AceEditor from "react-ace";
//helper imports
import { langArr, themeArr, modeArr } from './helpers/Options';
import './helpers/Imports';
//Component Imports
import LanguageDropdown from './components/LanguageDropdown/LanguageDropdown';
import ThemeDropdown from './components/ThemeDropdown/ThemeDropdown';
import ModeDropdown from './components/ModeDropdown/ModeDropdown';
import NameForm from './components/NameForm/NameForm';
import UsersList from './components/UsersList/UsersList';
//Backend service import
import {socket, codeCollection} from './services/Sync';

//App functional component
function App() {

  //State hooks
  const [content, setContent] = useState('function() {\n  console.log("Hello World!");\n}');
  const [mode, setMode] = useState(1);
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('monokai');
  const [allUsers, setAllUsers] = useState([]);
  const [user,setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  //Effect hook to hold real-time sync
  useEffect(() => {
    //syncs active users list
    socket.on('newUser', (data) => {
      setAllUsers(Object.values(data));
    })
    //syncs code
    if (mode === 1){
      codeCollection.onSnapshot( (serverUpdate) =>{
          const code = serverUpdate.docs[0].data().body;
          setContent(code);
        })
    } else if (mode === 2){
      socket.on('codeUpdate', (data) => {
        setContent(data.body);
      })
    }
  });
  //updates database when editor is changed
  function onChange(newValue) {
    if (mode === 1){
      codeCollection.doc('BOZGdMlvfV3t0MirVZOK').set({body : newValue});
      
    } else if (mode === 2){
      socket.emit('codeUpdate',{
        body: newValue
      });
    }
  } 
  return (
    <div className='container'>
      <h1 className="ui header">CodeCollaborate: Real-Time Code Editor</h1>
      <div className= "dropdown">
        <ModeDropdown className= "dropdown-child" currMode = {mode} modeArr = {modeArr} onModeClick ={setMode} />
        <LanguageDropdown className= "dropdown-child" currLang = {language} langArr = {langArr} onLangClick= {setLanguage}/>
        <ThemeDropdown className= "dropdown-child" currTheme= {theme} themeArr= {themeArr} onThemeClick = {setTheme} />
      </div>
      <div className='user-list-editor'>
        
        <AceEditor
            className= "editor"
            mode={language}
            theme={theme}
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            value={content}
            setOptions={{
              showLineNumbers: true,
              tabSize: 2,
              showGutter: true
              }}
          />
          <UsersList allUsers={allUsers} user={user}/>
        </div>
          <NameForm 
          setLoggedIn = {setLoggedIn} 
          setUser = {setUser} 
          socket = {socket}
          loggedIn = {loggedIn}
          />
    </div>
  );
}
export default App;
