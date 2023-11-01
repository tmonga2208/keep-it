import React from "react";
import  Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Note from "../components/note.jsx";
import notes from "../components/notes.jsx";


function App(){
    return <div>
        <Header/>
        {notes.map((noteItem) =>{
    return <Note title={noteItem.title} content={noteItem.content} />;
})}
        <Footer/>
    </div>
}

export default App;