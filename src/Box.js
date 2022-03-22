import { useState, useEffect, useRef } from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



function FirstBox({children}){
    return <div className="box1">
        <h1> {children}</h1> 
    </div>
}


function SecondBox(){
    return <div className="box2">

    </div>
}

function ThirdBox(){
    return(
        <div className="box3">
            <img src={'https://freesvg.org/img/pointinghand.png'}/>
        </div>
    )
}

function KissFace(){
    return(
        <div className="kissFace">
            <img src={"https://freesvg.org/img/Cartoon_head13.png"}/>
        </div>
    )
}

function KissFace2(){
    return(
        <div className="kissFace2">
            <img src={"https://freesvg.org/img/Cartoon-Head-62.png"}/>
        </div>
    )
}


function KissFace3(){
    return(
        <div className="kissFace3">
            <img src={"https://freesvg.org/img/peole-laptop.png"}/>
        </div>
    )
}


function ToPin(){
    return(
        <div className="toPin">
           
        </div>
    )
}



function Box(){
    
    


    const [reversed, setReversed] = useState(false)
    const el = useRef()
    const q = gsap.utils.selector(el)

    const tl = useRef()

    // const thirdRef = useRef(null)
    // let theEl = thirdRef.current
    
  
    

    useEffect(()=>{

        gsap.fromTo(".box3", {
            rotation:0
            },
            
            {rotation:30, duration: .3, scrollTrigger:{
                markers:true,
                scrub:1,
                trigger: ".box3",
                start: "top center",
                end: "top 100px"
            }}
            
            );

            gsap.fromTo(".kissFace", {
                rotation:0
                },
                
                {rotation:30, duration: .3, scrollTrigger:{
                    markers:true,
                    scrub:1,
                    trigger: ".kissFace",
                    start: "top center",
                    end: "top 100px"
                }}
                
                );


                gsap.fromTo(".kissFace2", {
                    rotation:0,
                    x:140
                    },
                    
                    {rotation:20, x:-50, duration: .3, scrollTrigger:{
                        markers:true,
                        scrub:1,
                        trigger: ".kissFace2",
                        start: "top center",
                        end: "top 100px"
                    }}
                    
                    );

                    gsap.fromTo(".kissFace2", {
                        opacity:100
                        },
                        
                        {opacity:0, scrollTrigger:{
                            markers:true,
                            scrub:1,
                            trigger: ".kissFace2",
                            start: "top center",
                            end: "top 100px"
                        }}
                        
                        );

                    gsap.fromTo(".kissFace", {
                        rotation:30
                        },
                        
                        {rotation:400, x:-200,y:500,     duration: .3, scrollTrigger:{
                            markers:true,
                            scrub:1,
                            trigger: ".kissFace",
                            start: "bottom center",
                            end: "bottom 100px"
                        }}
                        
                        );

                        gsap.fromTo(".kissFace", {
                            rotation:30,
                            opacity:100
                            },
                            
                            {rotation:400,opacity: 0, scrollTrigger:{
                                markers:true,
                                scrub:2,
                                trigger: ".kissFace",
                                start: "bottom center",
                                end: "bottom 130px"
                            }}
                            
                            );

                        gsap.fromTo(".kissFace3", {
                            rotation:30,
                            opacity:0,
                           
                            
                            
                            },
                            
                            {rotation:360, opacity:100, x:-200,y:500, duration: .3,   scrollTrigger:{
                                markers:true,
                                scrub:true,
                                trigger: ".kissFace3",
                                start: "bottom center",
                                end: "bottom 10px",
                               
                               

                            }}
                            
                            );

                          
    },[])
    
    useEffect(()=>{
        tl.current = gsap.timeline()
        .to(q(".box1"),{
            rotate: 360
        })
        .to(q(".box2"),{
            x:100
        })
    },[])

    useEffect(()=>{
        tl.current.reversed(reversed)
    },[reversed])

    


    return(
        <div ref={el}>
            <button onClick={()=> setReversed(!reversed)}>click</button>
            <FirstBox>Box 1</FirstBox>
            <SecondBox></SecondBox>
            <ThirdBox></ThirdBox>
            <KissFace></KissFace>
            <KissFace2></KissFace2>
            <KissFace3></KissFace3>
            <ToPin></ToPin>

           
        </div>
    )
}

export default Box;