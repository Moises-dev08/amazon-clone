import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-clone-4235b.cloudfunctions.net/api", // Deployed URL

  //  Local URL
  // "http://localhost:5001/clone-4235b/us-central1/api"
});

export default instance;
