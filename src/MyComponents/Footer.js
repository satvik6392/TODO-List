import React from 'react'

const Footer = () => {
  let footerstyle = {
    position: "relative",
    width : "100%",
    top: "70vh"
  }
  return (
    <footer className="bg-dark text-light" >
      <p className="text-center py-3">copyright &copy; My TodosList</p>
    </footer>
  )
}

export default Footer
