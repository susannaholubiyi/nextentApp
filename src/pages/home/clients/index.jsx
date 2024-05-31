import style from "../clients/index.module.css"
import logo0 from "../../../asset/Logo(0).png"
import logo1 from "../../../asset/Logo (1).png"
import logo2 from "../../../asset/Logo (2).png"
import logo3 from "../../../asset/Logo (3).png"
import logo4 from "../../../asset/Logo (4).png"
import logo5 from "../../../asset/Logo (5).png"
import logo6 from "../../../asset/Logo (6).png"
import {Members} from "./data";
const Client= ()=>{
    return(
        <>
            <div className={style.clients}>
                <h2>Our clients</h2>
                <p>We have been working with some Fortune 500+ clients</p>
                <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                    <img src={logo0} alt=""/>
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                    <img src={logo6} alt=""/>
                </div>
            </div>
            <div className={style.member}>
                <h2 style= {{fontSize: "30px", color: "#4d4d4d", textAlign: "center"}} >Manage your entire community in a <br/>single system</h2>
                <p >Who is Nexcent suitable for?</p>
            </div>
            <div className={style.member2}>
                {
                    Members.map((value, index)=>(
                        <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <img src={value.image} alt = {""}/>
                            <h1>{value.title}</h1>
                            <p style={{width: "50%", textAlign: "center"}}>{value.text}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}
export default Client;