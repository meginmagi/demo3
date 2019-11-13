import React from 'react';
import '../App.css';

const NewNote = ({NewNote,setNewNote,newimportance,setNewImportance,submitHandler}) => {
    return(
        <div>
            <form onSubmit={e => submitHandler(e)}/>
            <input type="text" onchange = {e => setNewNote(e.target.value)} value={NewNote}/>
            
        </div>
    )
}