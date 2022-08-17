import React ,{ useEffect, useState }from 'react'
import { imgUrl } from "../../constants/constants"
import axios from "../../axios"
import "./rowpost.css"

function Rowpost(props) {
    const [originals, setOriginals] = useState([])

    useEffect(() => {
            axios.get(props.url ? props.url : "").then((response)=>{
                setOriginals(response.data.results)
            }
            
    )

    }, [props])

    return (
        <div>
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    originals.map((obj)=>
                        (
                            <img className={props.small ? 'sm-poster' : "poster"} src={obj ? imgUrl+obj.backdrop_path:''} alt="poster" />
                        )    
                    )
                }
               
            </div>
            
        </div>
        </div>
        
    )
}

export default Rowpost