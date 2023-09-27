import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Quotes.css'
export default function Quotes() {
    const [quotes, setQuotes] = useState([{}]);
    const [oneQuote, setOneQuote] = useState({text:"", author:""});
    useEffect(()=>{
        axios.get('https://type.fit/api/quotes')
        .then(res=> setQuotes(res.data))
    },[])
    const newQuote =() =>{
        const quotesLen = quotes.length
        const randomNum = Math.floor(Math.random()*quotesLen)
        setOneQuote(quotes[randomNum])
    }

  return (
    <div>
        <h1>Quotes Generetor</h1>
        {oneQuote &&
        <div>
            <p className='oneQuote'>{oneQuote?.text}</p>
            <strong className='oneQuote'>{oneQuote?.author.split(',')[0]}</strong>
            </div> }
        <button onClick={newQuote} >New Quote</button>
    </div>
  )
}
