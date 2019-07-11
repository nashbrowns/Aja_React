import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get(process.env.REACT_APP_API_URL+"/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get(process.env.REACT_APP_API_URL+"/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete(process.env.REACT_APP_API_URL+"/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    console.log("saving user");
    return axios.post(process.env.REACT_APP_API_URL+"/api/user", userData);
  },
  loginUser: function(userData) {
    console.log(userData);
    return axios.post(process.env.REACT_APP_API_URL+"/api/user/login", userData);
  }
};