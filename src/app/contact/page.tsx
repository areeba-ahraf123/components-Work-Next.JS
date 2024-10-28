import Header from "@/components/Header";
import style from "./contact.module.css";

export default function Contact(){
    return(
       <div className={style.fullPage}>
            <Header />
            <h1 style={{color:"black" ,background:"orange" , fontWeight:"bolder"}}>
            How Can You Contact Me..?
        </h1><p style={{padding:"70px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae eligendi dolorem nemo voluptas facilis in amet et ut at! Natus?</p>
       </div> 
    )
}