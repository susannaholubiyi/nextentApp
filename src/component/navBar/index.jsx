import navLogo from "../../asset/navLogo.png"
import HeroIllustration from "../../asset/HeroIllustration.png"
import style from "./index.module.css";
const NavBar = ()=>{
    return(
        <>
            <div className={style.nav}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={navLogo} alt="logo"/>
                    <h2 style={{color: "#263238", fontsize: "30px"}}>Nexcent</h2>
                </div>
                <div className={style.midSection}>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Features</p>
                    <p>Product</p>
                    <p>Testimonial</p>
                    <p>Faq</p>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <button
                        style={{
                            color: "#4caf4f",
                            background: "none",
                            border: "none",
                            fontSize: "16px",
                            fontWeight: "500"
                        }}>Login
                    </button>
                    <button
                        style={{
                            padding: "10px",
                            borderRadius: "4px",
                            background: "#4caf4f",
                            color: "#ffffff",
                            border: "none"
                        }}>Sign up
                    </button>
                </div>
            </div>
           
        </>
    )

}
export default NavBar;