import { useState, createContext,useContext } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeInformationProvider = ({ children }) => {
  
  const [data, setData] = useState();
  let apiid = import.meta.env.VITE_APIID;
  let apikey = import.meta.env.VITE_APIKEY;


 const fetchData = async (query,diet, allergie) => {
    
    const {data} = await axios.get(
      `https://api.edamam.com/api/recipes/v2?q=${query}&app_key=${apikey}&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAQARGJGB2EWa1BxBAYGUXlSB2IQZAQiVwYPRjFGBDFGMlFwVlFTF2RHBzEbMFAhDVcVLnlSVSBMPkd5AAMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&diet=${diet}&health=${allergie}&type=public&app_id=${apiid} `
    )
    setData(data?.hits || [])
    // optional chaning => if val exist get it other if data doesnt exist return empty array 
    // potential errors. 
  };

//  const {data} -> destruction object from axion the key is called data desctruction that response and gettting data 
// with data we can set data

    
    
    
  



  return (
    <div >
      <RecipeContext.Provider value={{ data, fetchData }}>
        {children}
      </RecipeContext.Provider>
    </div>
  );
};
// provider creates context 
// consumer uses value 
// 
export function useAPI() {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

// allowing values to be used in other components 
// need to refetch the api data is when we want to use fetch data 
// no reason to call then dont pass it 
