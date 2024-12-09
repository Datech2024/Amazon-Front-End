import axios from "axios";

const axiosInstance = axios.create({
	//local instance of firebase function
	// baseURL: "http://127.0.0.1:5001/clone-a98dd/us-central1/api",
	// deployed version of firebase function
	baseURL: "https://us-central1-clone-a98dd.cloudfunctions.net/api",
	// deployed vesion of amazon server on render.com
	// baseURL: "https://amazon-api-deploy-dg5s.onrender.com",
});

export { axiosInstance };
