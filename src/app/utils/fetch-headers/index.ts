import Cookies from "js-cookie";

export const fetchHeaders = () => {
  const token = Cookies.get("token@data");
  const header = {
    Authorization: `Bearer ${token}`,
  };

  return header;
};
