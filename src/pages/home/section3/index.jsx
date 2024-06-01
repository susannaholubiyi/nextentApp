import style from "./index.module.css"
import image from "../../../asset/section3Pic.png"
import secondImage from "../../../asset/Section3image 9.png"
import logo1 from "../../../asset/section3/Logo (1).png"
import logo2 from "../../../asset/section3/Logo (2).png"
import logo3 from "../../../asset/section3/Logo (3).png"
import logo4 from "../../../asset/section3/Logo (4).png"
import logo5 from "../../../asset/section3/Logo (5).png"
import logo6 from "../../../asset/section3/Logo (6).png"
const Section3 = ()=>{
    return(
        <>
            <div className={style.section3}>
                <img src={image} alt={""}/>
                <div>
                    <h1 style={{display: "inline-block",}}>How to design your site footer like<br/> we did</h1>
                    <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<br/>
                        molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at<br/>
                        libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
                        porta<br/>
                        nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
                        Integer<br/>
                        in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et
                        nisi<br/>
                        ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <button style={{
                        color: "white",
                        background: "#4caf4f",
                        border: "none",
                        borderRadius: "5px",
                        padding: "15px 30px"
                    }}>Learn More
                    </button>
                </div>
            </div>
            <div className={style.secondHalf} style={{backgroundColor: "#e8e6e6"}}>
                <img src={secondImage} alt=""/>
                <div>
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<br/>
                        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br/>
                        enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br/>
                        mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br/>
                        eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat<br/>
                        ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id <br/>
                        sem dignissim finibus ac sit amet magna.
                    </p>
                    <h2 style={{color: "#4caf4f"}}>Tim Smith</h2>
                    <p>British Dragon Boat Racing Association</p>
                    <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <img src={logo1} alt={""}/>
                        <img src={logo2} alt={""}/>
                        <img src={logo3} alt={""}/>
                        <img src={logo4} alt={""}/>
                        <img src={logo5} alt={""}/>
                        <img src={logo6} alt={""}/>
                        <div>
                            <button style={{
                                backgroundColor: "none",
                                color: "#4caf4f",
                                border: "none",
                                padding: "15px 30px"}}>Meet all customers&rarr;</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Section3;