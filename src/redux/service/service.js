import axios from "axios";
import { setCharacterFields, setCharacterFilters } from "../action";
 export const  getAll=async()=>{return await axios.get("https://the-one-api.dev/v2/book")}
 export const  getAllmovie=async()=>{return await axios.get("https://the-one-api.dev/v2/movie",{ headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` } })}
//  export const  getAllcharacter=async()=>{return await axios.get("https://the-one-api.dev/v2/character",{ headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` } })}
 export const  getAllqoute=async()=>{return await axios.get("https://the-one-api.dev/v2/quote",{ headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` } })}
 export const requestCharacters = (prevFilters) => async (dispatch) => {
    try {
      const params = {
        limit: prevFilters.limit,
        page: prevFilters.page,
        sort: `${prevFilters.orderBy}:${prevFilters.order}`,
      };
      const { data: { docs, ...filters } } = await axios.get("https://the-one-api.dev/v2/character",{params, headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`} });
     console.log(process.env.REACT_APP_ACCESS_TOKEN);
      dispatch(setCharacterFields({ records: docs }));
      dispatch(setCharacterFilters(filters));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }