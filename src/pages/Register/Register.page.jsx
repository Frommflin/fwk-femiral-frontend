import React from "react";
import styles from "./register.module.css";
import { RegisterForm } from "femiral-components-lib";

const Register = () => {
  const handleSubmit = (user) => {
    alert(`user registered with username: ${user.username}`);
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default Register;
