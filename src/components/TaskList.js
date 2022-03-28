import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const TaskList = () => {
  const { tasks, addFavorites } = useContext(GlobalContext);
  let styleContent = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "",
    justifyContent: "space-around",    
  }

  let styleInfo = {
    flex: "1 1 200px",
    height: "200px",
    borderRadius: "15px",
    border: "1px solid #777777",
    margin: "5px 10px 5px 10px",
    backgroundColor: "#eeeeee",
    padding: "26px 60px",
    color: "#222222",
    boxShadow: "rgb(255 255 255 / 78%) 0px 0px 8px",
    transition: "box-shadow 0.3s ease",
    marginBottom: "25px"
  }

  let styleButton = {
    borderRadius: "5px",
    cursor:"pointer",
    padding:"10px 15px",
    backgroundColor:"rgb(18 241 27 / 64%)",
    border:"none"
  }  

  return (
    <div >
      <h1 style={{textAlign:"center", color:"white"}}>Personajes Star Wars</h1>
      {tasks.length > 0 ? (
        <div style={styleContent}>
          {tasks.map((task) => (              
              <div style={styleInfo}>
                <h3 style={{textAlign:"center"}}>{task.name}</h3>
                <div style={{textAlign:"center"}}>                  
                  <p>{"Altura: "} {task.height}</p>
                  <p>{"Peso: "}{task.mass}</p>
                  <p>{"Fecha de nacimiento: "}{task.birth_year}</p>
                </div>
                <div style={{textAlign:"center"}}>
                  <button
                      onClick={() => { 
                        addFavorites(task);                        
                      }}
                      style={styleButton}
                    >
                      Agregar a favoritos
                    </button>
                </div>               
              </div>
          ))}
        </div>
      ) : (
        <p >Sin registros</p>
      )}
    </div>
  );
};

export default TaskList;
