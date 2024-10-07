import { callApi } from "../../config/axios";
import { BASE_URL } from "../../config/config";

// const BASE_URL="http://localhost:8000/api";
export const userLogin = ({ email, password, username }) => {
  return async (dispatch) => {
    dispatch({
      type: "USER_LOGIN",
      payload: callApi("post", `${BASE_URL}/user/login`, {
        email,
        password,
      }),
    });
  };
};

export const userLogout = () => ({
  type: "USER_LOGOUT",
});

// export const userRegister = ({ email, password, username }) => ({
//   type: "USER_REGISTER",
//   payload: callApi("post", `${BASE_URL}/user/register`, {
//     email,
//     password,
//     username,
//   }),
// });

export const userRegister = ({ email, password, username }) => {
  return async (dispatch) => {
    dispatch({
      type: "USER_REGISTER",
      payload: callApi("post", `${BASE_URL}/user/register`, {
        email,
        password,
        username,
      }),
    });
  };
};


// export const userRegister = ({ email, password, username }) => {
//   return async (dispatch) => {
//     try {
//       // Dispatch the initial registration action
//       dispatch({ type: "USER_REGISTER" });

//       // Call the API
//       const response = await callApi("post", `${BASE_URL}/user/register`, {
//         email,
//         password,
//         username,
//       });

//       // If the API call is successful, dispatch the success action
//       dispatch({
//         type: "USER_REGISTER_FULFILLED",
//         payload: response.data, // Assuming response has a `data` field
//       });
//     } catch (error) {
//       // If the API call fails, dispatch the failure action
//       dispatch({
//         type: "USER_REGISTER_REJECTED",
//         payload: error.message || "Registration failed",
//       });
//     }
//   };
// };




export const getUser = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_USER",
      payload: callApi("get", `${BASE_URL}/user/profile`),
    });
  };
};
