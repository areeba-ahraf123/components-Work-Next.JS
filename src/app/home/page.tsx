import Header from "@/components/Header";
import style from "./home.module.css";

export default function Home(){
    return(
        <div className={style.fullPage}>
            <Header />
            <h1 className={style.heading}>
            Welcome to Home Page</h1>
        </div>
    )
}