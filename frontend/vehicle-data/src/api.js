import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const getVehicleTypes = (wheels) =>
  axios.get(`${API_BASE}/vehicle-types?wheels=${wheels}`);

export const getVehiclesByType = (typeId) =>
  axios.get(`${API_BASE}/vehicles?typeId=${typeId}`);

export const postBooking = (data) =>
  axios.post(`${API_BASE}/book`, data);
