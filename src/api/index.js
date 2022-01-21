import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw,ne) => {
    try {
        //request
        const {data:{data}} = await axios.get(URL,{
          
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
              // bl_latitude: '11.847676',
              // tr_latitude: '12.838442',
              // bl_longitude: '109.095887',
              // tr_longitude: '109.149359',
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'a49aec4728msh7c4c39973974f3ep19a4cejsn38f9c6732206'
            }
          });
        return data;

    } catch (error) {
        console.log(error)
    }
}