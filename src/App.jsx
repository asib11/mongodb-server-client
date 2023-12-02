import './App.css'

function App() {
  
  const handleForm = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('add an user successfully');
        form.reset();
      }
    })
  }

  return (
    <>
      
      <h1>mongodb CRUD</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="" placeholder='Enter Your Name'/>
        <br />
        <input type="email" name="email" id="" placeholder='Enter Your Email'/>
        <br />
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App
