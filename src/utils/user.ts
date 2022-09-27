import { login, logout } from "../firebase/authentication";

class User {
  id = "";
  username = "";

  verifyToken = async () => {};

  login = async () => {
    await login();
  };

  logout = async () => {
    await logout();
  };
}

export default new User();
