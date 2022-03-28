import React, { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const TaskList = () => {  
  const {deleteFav, fav, dataFav} = useContext(GlobalContext)   
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
    padding: "5px 10px 30px",
    color: "#222222",
    boxShadow: "rgb(255 255 255 / 78%) 0px 0px 8px",
    transition: "box-shadow 0.3s ease",
    marginBottom: "25px"
  }
  let styleButton = {
    borderRadius: "5px",
    cursor:"pointer",
    padding:"10px 15px",
    backgroundColor:"#ff0000bd",
    border:"none"
  }

  return (
    <div>
      <h1 style={{textAlign:"center", color:"white"}}>Favoritos</h1>
      {dataFav.length > 0 ? (
        <div style={styleContent}>
          {dataFav.map((task) => ( 
              <div style={styleInfo}>
                  <h3>{"Nombre: " +  task.name}</h3>                
                  <p>{"Altura: " + task.height}</p>
                  <p>{"Peso: " + task.mass}</p>
                  <p>{"Cumpleaños: " + task.birth_year}</p>
                  <div style={{textAlign:"center"}}>
                    <button
                      onClick={() => deleteFav(task)} 
                      style={styleButton}
                    >
                      Eliminar
                    </button>
                  </div>
              </div>
          ))}
        </div>
      ) : (
        <div style={{textAlign:"center"}}>
          <h1 style={{color:"white"}}>No hay favoritos</h1>
        </div>
      )}
    </div>
  );
};

export default TaskList;
