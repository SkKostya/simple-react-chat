import axios from "axios";

export const getRooms = () => {
  const rooms = axios.get("/rooms");

  return rooms;
};
