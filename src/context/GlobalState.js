import { createContext, useEffect, useReducer, useState} from "react";
import appReducer from "./AppReducer";
import { urlDefault } from "../api/api";

const initialState = {
  tasks: [
    {     
    },
  ]    
};

const initialStateFavorites = {
  fav : [
  ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(appReducer, initialStateFavorites); 
  const [data, setData] = useState([]);
  const [dataFav, setDataFav] = useState([]);  

  useEffect(() => {     

    fetch(urlDefault)
    .then(res => res.json())
    .then(res => {
      setData(res.results)
    })      
  },[])

  function deleteFav(res) {    
      let favs = [];
      dataFav.map((res) => {        
        favs.push(res);
      });
      favs.indexOf(res);
      favs.splice(favs.indexOf(res), 1);
      setDataFav(favs);
  }

  const dataPush = [];

  function addFavorites(tasks) {        

    if(dataFav.length < 1) {
      alert("Se añadio a favoritos");
      dataPush.push({name:tasks.name, height: tasks.height, mass: tasks.mass, birth_year: tasks.birth_year});
      setDataFav(dataPush);      
    } else {
      alert("Se añadio a favoritos");
      dataPush.push({name:tasks.name, height: tasks.height, mass: tasks.mass, birth_year: tasks.birth_year});
      dataFav && dataFav.map((res) => {
        let array= res;
        dataPush.push(array);
        setDataFav(dataPush)
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks:data,
        fav: state.fav,
        dataFav: dataFav,
        addFavorites,
        deleteFav
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
