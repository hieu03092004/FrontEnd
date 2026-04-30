import { FaAppleAlt } from "react-icons/fa";
function MainContent(){
    let name="Truong Thanh Hieu";
    const css={
    //   color:"red",
    //   backgroundColor:"blue"
    }
    return (
        <>
           <div className="box" style={css}> 
            Xin chào {name}!
            <FaAppleAlt  style={{fontSize:"100px"}}/>
            </div>
            
        </>
    )
}
export default MainContent;