import {useEffect, useState, useRef} from 'react'
import './search.scss'

const SearchApp = ()=>{
    const inputRef = useRef()
const [products, setProducts] = useState()
const [inputVal, setInputVal] = useState('')
    const fetchData = async ()=>{
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        setProducts(data.products)

        //title
        //images /thumnail
        //id
    }

    useEffect(()=>{
        fetchData()
    },[])
    const handleChange =(e)=>{
        setInputVal(e.target.value);
    }
    const handleClick = (e)=>{
        
        setInputVal("")
        inputRef.current.focus()
    }
    
    return(
        <div className='searchapp-main-div'>
            <div className="searchapp-input-div"> <input onChange={handleChange} value={inputVal}  ref={inputRef} type='text' placeholder="Search..." /><button onClick={handleClick} className="searchapp-input-btn">X</button></div>
            <div className='searchapp-products-container-div'>
              {products?.filter((item)=>{
                if(inputVal === ''){
                    return item
                }
                else if(item.title.toLowerCase().includes(inputVal.toLowerCase())){
                    return item
                }
              }).map((val)=>{
              return (
                <div className="searchapp-card-div" key={val.id}>
                    <img  src={val.thumbnail}/>
                    <p>{val.title}</p>
                </div>
              )
              })}
            </div>
        </div>
    )
}

export default SearchApp;