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
    console.log("starting effect");
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log("promise fulfilled");
        setNotes(response.data);
      })
  };
  
  useEffect(getNotes,[]);
  console.log("ready", notes);

  // const addNote = event => {
  //   const testNote = {
  //     content: "Remember remember the 5th of November",
  //     date: "2019-11-5TU00:00:00.000Z",
  //     important: true
  //   };
  //   axios
  // }
  return (
      <div>
        <p>Hello!</p>
        <NewNote newNote={newNote} setNewNote={setNewNote} newImportance={newImportance} setNewImportance={setNewImportance} />
        <Notes newNote={newNote} setNewNote={setNewNote} />
      </div>
  )
}

export default App;
