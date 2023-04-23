
import {Image} from 'react-bootstrap'
function Header(){
    return(
<header style={{background: "linear-gradient(45deg, black, grey)", height: "40vh", color: "white"}}>
    <Image src='image.jpg'   style={{ width: '150px', height: '150px', cursor: 'pointer',marginTop:'8vh'}} roundedCircle/>
    <h2>Amine FRIRA</h2>
    <h3>4th year Student at moroccan school of engineering sciences</h3>
  </header>
  )
}
export default Header;