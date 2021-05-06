import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import FormLayout from '../components/FormLayout';
import { useHistory } from "react-router-dom";
import "../styles/Personal.css";

const Personal : React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password);
    history.push("/dob");
  }

  return (
    <Layout title="Personal Details" background="#FCE694">
      <FormLayout title="Personal Details">
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
          <button className="personal-btn" type="submit">
            <b>Next</b>
          </button>
        </form>
      </FormLayout>
    </Layout>
  )
};

export default Personal;