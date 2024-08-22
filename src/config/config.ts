const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction ? process.env.REACT_APP_BASE_URL : "http://localhost:3000/api/v1";

export { BASE_URL }