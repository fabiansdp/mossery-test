import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import FormLayout from '../components/FormLayout';
import FilledButton from "../components/FilledButton";
import "../styles/Personal.css";

const Personal : React.FC = () => {
  const [firstName, setFirstName] = useState(sessionStorage.getItem("firstName") || "");
  const [lastName, setLastName] = useState(sessionStorage.getItem("lastName") || "");
  const [email, setEmail] = useState(sessionStorage.getItem("email") || "");
  const [password, setPassword] = useState(sessionStorage.getItem("password") || "");

  const history = useHistory();

  // Set data to session storage everytime it changes
  useEffect(() => {
    sessionStorage.setItem("firstName", firstName);
  }, [firstName]);

  useEffect(() => {
    sessionStorage.setItem("lastName", lastName);
  }, [lastName]);

  useEffect(() => {
    sessionStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    sessionStorage.setItem("password", password);
  }, [password]);

  const handleSubmit = () => {
    if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
      history.push("/dob");
    } else {
      console.log("isi form")
    }
  }

  return (
    <Layout title="Personal Details" background="#FCE694">
      <div className="content-container">
        <FormLayout title="Enter Personal Details">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
            <InputField
              name="First Name"
              value={firstName}
              setValue={setFirstName}
              placeholder="John"
            />
            <InputField
              name="Last Name"
              value={lastName}
              setValue={setLastName}
              placeholder="Doe"
            />
            <InputField
              name="Email"
              value={email}
              setValue={setEmail}
              placeholder="johndoe@email.com"
            />
            <InputField
              name="Password"
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="***********"
            />
            <FilledButton 
              name="Next"
              submit={true}
              handleClick={handleSubmit}
              background="black"
              width="100%"
              color="white"
            />
          </form>
        </FormLayout>
        <div className="image-container">
          <img src="people.png" alt="Personal" />
        </div>
      </div>
    </Layout>
  )
};

export default Personal;