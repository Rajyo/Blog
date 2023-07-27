import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (  
    <>
      <footer className='boxItems'>
        <div className='container flex' style={{margin:"0px 5rem"}}>
          <p style={{color:"black"}}>© 2023 Unicorn Blog - All right reserved - Design & Developed by RJ, Inc</p>
          <div className='social' style={{color:"black"}}>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
