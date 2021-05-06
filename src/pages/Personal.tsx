import React, { useState } from 'react';
import Layout from '../components/Layout';
import InputField from '../components/InputField';

const Personal : React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout title="Personal Details">
      <form onSubmit={(e) => {
        e.preventDefault();
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
      </form>
    </Layout>
  )
};

export default Personal;