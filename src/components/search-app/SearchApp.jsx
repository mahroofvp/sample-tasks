import {useEffect, useState} from 'react'
import './search.scss'

const SearchApp = ()=>{
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
    return(
        <div className='searchapp-main-div'>
            <div className="searchapp-input-div"> <input onChange={handleChange} type='text' placeholder="Search..."/> </div>
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
                    <img style={{width:"100%", height:"250px"}} src={val.thumbnail}/>
                    <p>{val.title}</p>
                </div>
              )
              })}
            </div>
        </div>
    )
}

export default SearchApp;