import { store } from "../Redux/store";
console.log("isauth",store.getState())
// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
    console.log("isauth",store.getState())
};
