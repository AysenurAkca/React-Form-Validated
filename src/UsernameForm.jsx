import React, {useState} from 'react'

export default function UsernameForm() {
    const [username, setUsername] = useState('')

    const handleChange = (e) => {
        setUsername(e.target.value)
        console.log(e.target.name);
    }
  return (
    <div>
        <input type="text" name="username" placeholder='username' value={username}  onChange={handleChange}/>
        <button>Submit</button>
    </div>
  )
}
