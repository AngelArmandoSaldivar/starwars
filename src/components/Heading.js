import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {

  let styleNav = {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "Poppins,sans-serif",
    outline: "0"
  }

  let styleContainerMenu = {
    isplay: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1555px",
    width: "100%",
    margin: "auto",
    padding: "30px 20px",
  }

  let styleLogo = {
    width: "150px",
    marginLeft: "10px"
  }

  let menuBox = {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "Poppins,sans-serif",
    outline: "0",
  }

  let menuList = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",    
  }

  let styleButton = {
    cursor:"pointer",
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    fontSize: "1.6rem",
    margin: "0 50px"
  }

  return (
    <div style={styleNav}>
      <div style={styleContainerMenu}>
        <div style={styleLogo}>
          <Link to="/" style={{textDecoration:"none"}}>
            <span style={{color:"white", fontSize:"1.5rem"}}>Star Wars</span>
          </Link>
        </div>

        <div style={menuBox}>
        <div style={menuList}>
        <Link to="/">
            <button style={styleButton}>
              <span>Inicio</span>
            </button>
          </Link>
          <Link to="/favorites">
            <button style={styleButton}>
              <span>Favoritos</span>
            </button>
          </Link>          
        </div>
        </div>


      </div>
    </div>
  );
};

export default Heading;
