import React, { useEffect, useState } from 'react'
import avatar from '../../assets/avatar 1.png'
import icon from '../../assets/Component 1.svg'
import './main.css'
import axios from 'axios'

const Main  = () => {

    const [data, setData] = useState([])

    useEffect(() => {
       async function getData(){
           const response = await axios.get("https://api.github.com/users/psych0wav3/repos")
            setData(response.data)
       }
       getData()
    }, [])

    console.log(data)

    return(
        <div className="container1">
            <div className="header1">
                <img src={avatar} alt=" " />
                <img src={icon} alt=" " />
                <p>Geovane Silva</p>
            </div>
            <div className="content1">
                {data.map(repo => {
                    return(
                        <div className="card">
                            <p>{repo.id}</p>
                            <p>{repo.name}</p>
                            <a className="git" href={repo.git_url}>Veja no Github!</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main