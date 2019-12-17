import React from 'react';
import '../App.css';

const NewNote = ({newNote,setNewNote,newImportance,setNewImportance,submitHandler}) => {
    return(
        <div className ="notesBG">
            <form onSubmit={e => submitHandler(e)}>
            <input type="text" onChange = {e => setNewNote(e.target.value)} value={newNote}/>
            Tärkeä:
            <input onChange={e => setNewImportance(e.target.checked)} checked={newImportance} type="checkbox" />
            </form>
        </div>
    )
}

export default NewNote;