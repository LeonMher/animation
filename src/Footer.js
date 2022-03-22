import React from 'react'
import {useRef, useEffect} from 'react'
import {gsap} from 'gsap'

function Footer({todo, deleteAll}){

    let ref = useRef()

    useEffect(()=>{
        gsap.fromTo(ref.current, {x:-300}, {x:0})
    }, [])
    const len = todo.filter((t)=> t.isCompleted).length

    return(
        <div >
            <p>{len}/{todo.length}</p>
            <button ref={ref} onClick={deleteAll}>Clear completed</button>
        
        </div>
    )
}

export default Footer;