import React from 'react';
import './App.css';

function App() {

  const upload = (event: any) => {
    // file
    let file = event.target.files[0];

    // create the form data to be sent
    const formData = new FormData();
    formData.append("myFile", file);

    // send post request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/api", true);
    xhr.send(formData);
  };

  const submit = async () => {
  };

  return (
    <div>
      <input type="file" onChange={upload}/>
      <br/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
