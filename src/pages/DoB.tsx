import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import FormLayout from '../components/FormLayout';
import FilledButton from "../components/FilledButton";

const DoB : React.FC = () => {
  const [date, setDate] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    console.log(date);
    history.push("/agreement");
  }

  return (
    <Layout title="Date Of Birth" background="#1E96FC">
      <FormLayout title="Enter Date of Birth">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <InputField
            name="Date Of Birth"
            type="date"
            value={date}
            setValue={setDate}
            placeholder="John"
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
    </Layout>
  )
};

export default DoB;