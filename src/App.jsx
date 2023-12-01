import './App.css'

function App() {
  
  const handleForm = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user)
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
