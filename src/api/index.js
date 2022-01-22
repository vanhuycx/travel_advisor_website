import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (type,sw,ne) => {
    try {
        //request
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
              //Test
              // bl_latitude: '11.847676',
              // tr_latitude: '12.838442',
              // bl_longitude: '109.095887',
              // tr_longitude: '109.149359',
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY
            }
          });
        return data;

    } catch (error) {
        console.log(error)
    }
}




export const getWeatherData = async (lat,lng) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: {     
        lon: lng,     
        lat: lat,
        
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY
      }
    })
    return data
    
  } catch (error) {
    console.log(error)
  }
  
};


