import { useSelector } from "react-redux";
import Feed from "./Feed";
import Landing from "./Landing"; // Adjust path if needed

const Home = () => {
  const user = useSelector((store) => store.user);

  // If user exists, show Feed. Otherwise, show Landing page.
  return user ? <Feed /> : <Landing />;
};

export default Home;
