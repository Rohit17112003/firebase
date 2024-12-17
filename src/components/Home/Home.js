import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Home.module.css";
import InputControl from "../InputControl/InputControl";
import toast, { Toaster } from 'react-hot-toast';
function Home({ name }) {
  const [userName, setUserName] = useState("");
  const [dob, setDob] = useState();
  const [isUser18, setIsUser18] = useState(null);
  const myPassword = "Aarti@2794"
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserName(user?.displayName);
    });
    return () => { };
  }, []);

  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // comparing my password with user input 
    if (myPassword === password) {
      toast.success('logged in');
      setTimeout(() => {
        
        navigate("/login");
      }, 1000);
      setPassword("");
    } else {
      toast.error('invailid login');
      setPassword("");
    }
  }

  return (
    <>
    <Toaster/>
      <form onSubmit={handleSubmit} className={styles.main}>
        <h1 className="text-4xl md:text-5xl lg:text-8xl text-blue-900">Aarti Kumari</h1>
        <InputControl
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          type="text"
          label="password"
          value={password}
          required
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Home;
