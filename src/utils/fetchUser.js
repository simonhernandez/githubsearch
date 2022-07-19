import { githubAPI } from "../constants/githubAPI";


export const fetchUser = async(user) => {

  try {
    const response = await githubAPI.get(user);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }

}