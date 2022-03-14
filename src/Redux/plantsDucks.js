import axios from "axios";
var AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg1YzQwMmVkYjAxZjFiOTgwMWQzZTQ1YmIzMjkwMzY0NTNmMDc3MDM1IiwibG9naW5UaW1lIjoxNjMxNzAyMzYyNzQ4LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0yNSAwMzoyNjoyOCIsImlhdCI6MTYzMTcwMjM2Mn0.khqJFJIYl27Pv0nbOjRUZ3oMEFeSpKxHWEVX7z9Nuvg";

axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

/* Constants */
const dataInicial = {
  array: [],
  geolocationData: [],
  countryStore: null,
};

/* Types */
const GET_FARM = "GET_FARM";
const GET_GEOLOCATIONDATA_SUCESS = "GET_GEOLOCATIONDATA_SUCESS";
const SET_COUNTRY_SUCESS = "GET_NAME_SUCESS";
/* Reducer */
export default function plantsReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_FARM:
      return { ...state, array: action.payload };
    case GET_GEOLOCATIONDATA_SUCESS:
      // localStorage.setItem("Country", action.payload.country);
      return { ...state, geolocationData: action.payload };
    case SET_COUNTRY_SUCESS:
      return { ...state, countryStore: action.payload };
    default:
      return state;
  }
}

/* Actions */
export const getPlantsAction = () => async (dispatch, getState) => {
  try {
    // console.log("getState", getState().plants.offset);
    //const res = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

    //const res = await axios.get("https://backend-farm.plantvsundead.com/farms?limit=10&offset=0");
    // console.log(res);

    dispatch({
      type: GET_FARM,
      payload: [{ data: "nose" }],
    });
  } catch (error) {}
};

export const GetGeolocationData = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://extreme-ip-lookup.com/json/?key=" + process.env.REACT_APP_IPKEY
    );
    dispatch({
      type: GET_GEOLOCATIONDATA_SUCESS,
      payload: res.data,
    });
  } catch (error) {}
};

export const StoreSetCountry = (countryStore) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SET_COUNTRY_SUCESS,
      payload: countryStore,
    });
  } catch (error) {}
};
