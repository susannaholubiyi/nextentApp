import style from "./index.module.css"
import image from "../../../asset/Frame 35.png"
import {SectionTwoMembers} from "./data";
const Section1 = ()=>{
    return(
        <>
            <div className={style.section1}>
                <img src={image} alt={""}/>
                <div>
                    <h1 style={{display: "inline-block",}}>The unseen of spending three <span
                        style={{color: "#4caf4f", display: "block"}}>years at Pixelgrade</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.<br/> Sed
                        accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed<br/>
                        porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                        Etiam <br/>quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
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
            <div className={style.section2} style={{backgroundColor: "#e8e6e6"}} >
                <div className={style.helping}>
                    <h1>Helping a local<span style={{ color: "#4caf4f", display: "block"}}>business reinvent itself</span> </h1>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className={style.section2Members} style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    {
                        SectionTwoMembers.map((value, index)=>(
                            <div key={index} >
                                <img src={value.image} alt={"icon"}/>
                                <h3>{value.figure}</h3>
                                <p>{value.text}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
export default Section1;