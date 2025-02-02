import axios from 'axios';
import { AppointmentData, ContactData, PostData } from './types';
import { API_ENDPOINTS } from './constants';
console.log(import.meta.env.VITE_API_URL,'vite');

// Set the base URL from .env variable
const API_URL = import.meta.env.VITE_API_URL;

// 📌 Login user
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}${API_ENDPOINTS.login}`, { email, password });
    return response.data; // Returns token & user info
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Invalid email or password.");
  }
};

// 📌 Register user
export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}${API_ENDPOINTS.register}`, { email, password });
    return response.data; // Returns success message
  } catch (error) {
    console.error("Registration failed:", error);
    throw new Error("Error during registration.");
  }
};


// Book an appointment
export const bookAppointment = async (appointmentData: AppointmentData) => {
  try {
    const response = await axios.post(`${API_URL}${API_ENDPOINTS.bookAppointment}`, appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error booking appointment:', error);
    throw new Error('Error booking appointment');
  }
};

// Send contact message
export const sendContactMessage = async (contactData: ContactData) => {
  try {
    const response = await axios.post(`${API_URL}${API_ENDPOINTS.sendContactMessage}`, contactData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw new Error('Error sending message');
  }
};

// Get all appointments for the doctor/admin
export const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_URL}${API_ENDPOINTS.getAppointments}`);
    return response.data.appointments;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw new Error('Error fetching appointments');
  }
};

// Update appointment status (for doctor/admin)
export const updateAppointmentStatus = async (id: string, newStatus: string) => {
  try {
    const response = await axios.put(`${API_URL}${API_ENDPOINTS.updateAppointmentStatus(id)}`, { status: newStatus });
    return response.data;
  } catch (error) {
    console.error('Error updating appointment status:', error);
    throw new Error('Error updating appointment status');
  }
};

// Get all posts
export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}${API_ENDPOINTS.getPosts}`);
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Error fetching posts');
  }
};

// Create a new post
export const createPost = async (postData: PostData) => {
  try {
    const response = await axios.post(`${API_URL}${API_ENDPOINTS.createPost}`, postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw new Error('Error creating post');
  }
};

// Like a post
export const likePost = async (postId: string) => {
  try {
    const response = await axios.put(`${API_URL}${API_ENDPOINTS.likePost(postId)}`);
    return response.data;
  } catch (error) {
    console.error('Error liking post:', error);
    throw new Error('Error liking post');
  }
};

// Comment on a post
export const commentOnPost = async (postId: string, comment: string) => {
  try {
    const response = await axios.post(`${API_URL}${API_ENDPOINTS.commentOnPost(postId)}`, { comment });
    return response.data;
  } catch (error) {
    console.error('Error commenting on post:', error);
    throw new Error('Error commenting on post');
  }
};
