import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import FormLayout from '../components/FormLayout';
import FilledButton from "../components/FilledButton";
import Alert from '../components/Alert';
import "../styles/Personal.css";

interface Props {
  setComplete: (bool: boolean) => void
}

const Personal : React.FC<Props> = ({setComplete}) => {
  const [firstName, setFirstName] = useState(sessionStorage.getItem("firstName") || "");
  const [lastName, setLastName] = useState(sessionStorage.getItem("lastName") || "");
  const [email, setEmail] = useState(sessionStorage.getItem("email") || "");
  const [password, setPassword] = useState(sessionStorage.getItem("password") || "");
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  // Email validator
  const isValidEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

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
    setError(null);

    if (firstName === "") {
      setError("First name is empty!");
    } else if (lastName === "") {
      setError("Last name is empty!");
    } else if (password === "") {
      setError("Password is empty!");
    } else if (!isValidEmail(email)) {
      setError("Email is not valid!");
    } else {
      setComplete(true);
      sessionStorage.setItem("hasPersonal", "true");
      history.push("/dob");      
    }
  }

  return (
    <Layout title="Personal Details" background="#FCE694">
      <div className="content-container">
        <FormLayout title="Enter Personal Details">
          <Alert error={error} setError={setError} />
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