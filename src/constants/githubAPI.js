// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it

const BASE_URL = "https://api.github.com";
const BASE_ENDPOINT_URL = BASE_URL + "/users/";

export const githubAPI = axios.create({
	// .. where we make our configurations
	baseURL: BASE_ENDPOINT_URL,
});