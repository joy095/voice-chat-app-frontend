import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLink = {
    color: "#0077FF",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const histry = useHistory();
  function startRegister() {
    histry.push("/register");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Live Voice Chat" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLink} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
