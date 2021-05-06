import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../components/Layout';
import InputField from '../components/InputField';
import FormLayout from '../components/FormLayout';
import FilledButton from "../components/FilledButton";
import "../styles/Personal.css";

const DoB : React.FC = () => {
  const [date, setDate] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    console.log(date);
    if (date !== null) {
      history.push("/agreement");
    }
  }

  return (
    <Layout title="Date Of Birth" background="#81F0E5">
      <div className="content-container">
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
        <div className="image-container">
          <img src="calender.png" alt="Personal" />
        </div>
      </div>
    </Layout>
  )
};

export default DoB;