import React,{useState,useEffect} from 'react';
import noteService from './services/notes';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newImportance, setNewImportance] = useState(false);

  

  const getNotes = () => {
    noteService
    .getAll()
    .then(allNotes => {
      setNotes(allNotes);
    })
  };
  //Muistiinpanot haetaan alussa
  useEffect(getNotes, []);

  const addNote = event => {
    const now = new Date();
    event.preventDefault();
    const testNote = {
      content: newNote,
      date: now.toISOString(),
      important: newImportance
    };
    noteService.add(testNote)
    .then(note => {
    let tempNotes = notes.concat(note);
    setNotes(tempNotes);
    setNewNote("");
    setNewImportance("False");
    })
  }

 
  return (
    <div className="App">
      <header>
        <div class="App-header">
          JSON server with notes
        </div>
        <div class="notesBG">
          <NewNote submitHandler={addNote} newNote={newNote} setNewNote={setNewNote} newImportance={newImportance} setNewImportance={setNewImportance}/>
          
          <h2>Muistiinpanot</h2>
          <div class="list">
            <Notes mynotes={notes} setNotes={setNotes}/>
            <br />
          </div>
        </div>
      </header>
    </div>
  );
 }
export default App;