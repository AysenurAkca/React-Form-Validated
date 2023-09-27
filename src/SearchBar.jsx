import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function SearchBar() {
    const [posts, setPosts] = useState([])
    const [search,setSearch] = useState("")
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setPosts(res.data))
        .catch(err=> console.log(err))
    },[])
 
    const deletePosts = (id) =>{
        setPosts(posts.filter(post=> post.id !== id))
    }
    const filteredPosts = posts?.filter(post =>{
        return post.title.includes(search)
    })

    const updatePost = (id) => {
        const info = prompt("What do you want?")
        setPosts((currPosts)=>{
            return currPosts.map(post => {
                if(id === post.id){
                    return {...post, title:info}
                }else{
                    return {...post}
                }
            })
        })
    }

    const deleteAll =() => {
        setPosts([])
    }

    const getAllPost =()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setPosts(res.data))
        .catch(err=> console.log(err))
    }
  return (
    <div>
        <input type="text" placeholder='what are you looking?' value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>
        <button>Submit</button>
        <p><button onClick={deleteAll}>Delete All List</button></p>
        <p><button onClick={getAllPost}>Get All List</button></p>
        {filteredPosts.length>0 && <h1>Lists</h1>}
        {filteredPosts.length>0 ?
        <ul>
        {filteredPosts?.map(fp => {
            return <li key={fp.id}>{fp.title} <button onClick={()=>deletePosts(fp.id)}> Delete </button> <button onClick={()=>updatePost(fp.id)}> Update </button></li>
        })
        }
        </ul> : <h1>No Data</h1> }
    </div>
  )
}
