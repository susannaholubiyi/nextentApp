import style from "../../../component/navBar/index.module.css"
import HeroIllustration from "../../../asset/HeroIllustration.png";

const Hero = ()=>{
    return(
        <>
            <div className={style.heroSection} style={{color: "#f5f7f"}}>
                <div>
                    <h1>Lessons and insights<span style={{color: "#4caf4f", display: "block"}}>from 8 years</span></h1>
                    <p style={{color: "#4d4d4d", marginTop: "0"}}>Where to grow your business as a photographer: site or
                        social media?</p>
                    <button style={{
                        color: "#ffffff",
                        background: "#4caf4f",
                        border: "none",
                        borderRadius: "5px",
                        padding: "15px 30px"
                    }}>Register
                    </button>
                </div>
                <div>
                    <img src={HeroIllustration} alt=""/>
                </div>
            </div>
        </>
    )
}
export default Hero;