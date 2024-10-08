import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProviders";

const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <h1>This is Home {user?.displayName}</h1>
    </div>
  );
};

export default Home;
