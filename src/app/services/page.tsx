import Header from "@/components/Header";
import style from "./services.module.css";
import Footer from "@/components/Footer";

export default function Contact(){
    return(
        <div className={style.fullPage}>
            <h1> 
                <Header />
                <h1 style={{fontWeight:"bolder" ,textAlign:"center" ,padding:"20px" ,backgroundColor:"rgb(229, 255, 0)"}}>Our Available Services</h1>
                <h2 style={{backgroundColor:"orange" }}>Graphic Desigening</h2>
                <h2 style={{color:"black" ,backgroundColor:"red"}}>Logo Desigening</h2>
                <h2 style={{backgroundColor:"green"}}>Web Developement</h2>
    
            </h1>
            
        </div>
    )
}