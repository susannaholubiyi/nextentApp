import style from'./index.module.css'
import {SectionFourMembers} from "./data";
const Section4 = ()=>{
    return(
        <>
           <div>
               <h2>Caring is the new marketing</h2>
               <p>The Nexcent blog is the best place to read about the latest membership insights,<br/>
                   trends and more. See who's joining the community, read about how our community<br/>
                   are increasing their membership income and lot's more.
               </p>
           </div>
            <div className={style.section4Members} style={{display: "flex", alignContent: "space-evenly"}}>{
                SectionFourMembers.map((value, index)=>(
                    <div key={index}>
                        <img src={value.image} alt=""/>
                        <h3>{value.text}</h3>
                        <button style={{
                            backgroundColor: "none",
                            color: "#4caf4f",
                            border: "none",
                            padding: "15px 30px"}}>{value.buttonText}&rarr;</button>
                    </div>
                ))
            }
            </div>
        </>
    )
}
export default Section4;