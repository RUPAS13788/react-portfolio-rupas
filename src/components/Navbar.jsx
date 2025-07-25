import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 item-center">
{/*         <img  className= "mx-2 w-10" src={logo} alt="logo" /> */}
      <h1>Poul bro (PR)</h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/p-rupas-babu/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="https://github.com/RUPAS13788" target="_blank"rel="noopener noreferrer">   <FaGithub /> </a>
    <a href="https://x.com/PRupas092003"  target="_blank" rel="noopener noreferrer" ><FaSquareXTwitter /></a>
    <a href="https://www.instagram.com/prince_rupas/?igsh=MWxudXJkaHdydG84NQ%3D%3D#"  target="_blank" rel="noopener noreferrer" >    <FaInstagram /></a>
    </div>
  </nav> ;
  
};

export default Navbar
