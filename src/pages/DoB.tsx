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

const DoB : React.FC<Props> = ({setComplete}) => {
  const [date, setDate] = useState(sessionStorage.getItem("dateOfBirth") || "");
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  // Set data to session storage everytime it changes
  useEffect(() => {
    sessionStorage.setItem("dateOfBirth", date);
  }, [date]);

  const handleSubmit = () => {
    if (date !== "") {
      setComplete(true);
      sessionStorage.setItem("hasDate", "true");
      history.push("/agreement");
    } else {
      setError("Fill in your date of birth!");
    }
  }

  return (
    <Layout title="Date Of Birth" background="#81F0E5">
      <div className="content-container">
        <FormLayout title="Enter Date of Birth">
          <Alert error={error} setError={setError} />
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