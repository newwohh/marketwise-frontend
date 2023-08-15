import { backendBaseUrl } from "../constants/constants";
import secureLocalStorage from "react-secure-storage";

export const directHeatmap = async (navigation) => {
  const request = await fetch(backendBaseUrl + "api/v1/users/heatmap", {
    credentials: "include",
  });
  const response = await request.json();
  if (response.status === "success") {
    navigation("/heatmap/stocks");
  } else {
    navigation("/login");
  }
};

export const userLogout = async () => {
  const req = await fetch(backendBaseUrl + "api/v1/users/logout", {
    credentials: "include",
  });
  const res = await req.json();
  secureLocalStorage.removeItem("user");
  if (res.status === "success") window.location.reload(true);
};
