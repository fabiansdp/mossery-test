import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import FilledButton from "../components/FilledButton";
import Alert from "../components/Alert";
import "../styles/Agreement.css";

interface FormData {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  agreement: boolean
}

const Agreement : React.FC = () => {
  const [accept, setAccept] = useState(sessionStorage.getItem("accept") || "false");
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState("#ff5252");

  const history = useHistory();
  const {REACT_APP_API} = process.env;

  useEffect(() => {
    sessionStorage.setItem("accept", accept);
  }, [accept]);

  const handleSubmit = () => {
    const agreement = JSON.parse(accept);

    if (agreement) {
      const formData : FormData = {
        firstName: sessionStorage.getItem("firstName") || "",
        lastName: sessionStorage.getItem("lastName") || "",
        email: sessionStorage.getItem("email") || "",
        password: sessionStorage.getItem("password") || "",
        agreement: agreement
      }

      axios.post(`${REACT_APP_API}`, formData)
      .then ((response) => {
        if (response.data) {
          setColor("#39C16C");
          setError("Success! Please check your email!");
          sessionStorage.clear();
        } else {
          setError("Please Try Again");
        }
      })
      .catch((e) => {
        setError(e.msg);
        return
      }).finally(() => {
        setTimeout(() => history.push("/welcome"), 1000);
      })

    } else {
      setError("Please agree to the terms and conditions");
    }
  };

  return (
    <Layout title="Terms and Conditions" background="#FCE694">
      <div id="agreement-container">
        <div className="agreement-content">
          <span>Terms and Conditions</span>
          <div className="agreement-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo facilis tenetur! Sapiente quae eos distinctio amet eum, voluptates ea atque quam delectus beatae voluptatem quasi officia, aut adipisci. Soluta perspiciatis, maiores accusamus praesentium molestiae libero ut nobis quasi omnis temporibus, maxime quisquam iste recusandae porro dicta? Sint amet sequi tempora sit tenetur? Aspernatur aliquam, sint illo repellat quos ratione atque officia tenetur rem error suscipit porro aliquid inventore, voluptates, saepe placeat commodi quis itaque aperiam adipisci quod repudiandae enim mollitia. Harum perspiciatis corporis ex maiores officia exercitationem, quos earum veniam ipsum aliquid ut placeat ipsam minima molestiae atque velit mollitia numquam voluptate ab laboriosam. Sapiente illo necessitatibus eveniet quo voluptates, ut ullam maiores nemo aliquam quas minus quidem nesciunt saepe exercitationem eaque dolorum omnis sit nihil voluptas placeat? Delectus mollitia deserunt nostrum sit labore, vel eveniet, hic tempore ea iure id eaque ut, suscipit excepturi illo adipisci ipsam. Quia vel, possimus adipisci amet saepe fuga harum omnis deleniti consequatur, ea eius sapiente voluptate animi nesciunt sint nulla expedita, velit non beatae commodi ipsam doloremque temporibus qui? Reiciendis natus nesciunt, maxime fugiat recusandae maiores delectus amet pariatur sint ducimus odio sapiente mollitia molestias neque aperiam sunt esse. Adipisci consectetur iste ipsam unde sunt nisi, nostrum, nemo pariatur iure in illum rerum eveniet eaque accusamus dolorum quidem molestias dolor vero dignissimos ipsum! Perspiciatis quibusdam tenetur doloremque nemo eius consectetur inventore sed sequi, veniam vel. Mollitia enim voluptatibus culpa provident nulla sequi, consequuntur fugiat sit odio labore eligendi illo esse ipsum eveniet! Nostrum autem enim itaque. Repellendus voluptatibus atque doloribus ipsum excepturi inventore, unde nostrum, veniam modi quod pariatur animi amet! Beatae, consequatur modi minus totam incidunt voluptatum officia natus, pariatur quibusdam repellendus aperiam nostrum saepe iusto corporis fuga eligendi cum labore accusamus error voluptas. Accusamus repudiandae dolor consectetur dignissimos nulla autem tempore quia, ratione tenetur totam et facere molestiae corporis ullam rerum non laudantium sint, obcaecati voluptas! Vel dolorem consequuntur distinctio, enim dolorum omnis nostrum. Molestias assumenda numquam tempora hic id eius suscipit. Reprehenderit, molestiae. At praesentium, iure nobis nam cupiditate necessitatibus aliquam repellendus dolorum qui officiis, laudantium impedit? Earum quibusdam tempora nostrum, accusantium error itaque suscipit? Vel, omnis quasi? Ex exercitationem molestias ipsa explicabo, porro rem autem nemo voluptate harum praesentium totam dolor officiis consequatur inventore optio ullam adipisci. Dignissimos similique tempora, aut id aperiam obcaecati molestiae assumenda provident deleniti adipisci saepe, placeat iste dolorem? Eum, pariatur officiis dolor, hic eaque id maxime eos voluptatibus itaque provident veritatis, delectus esse aperiam repellendus nobis asperiores voluptates fugiat iste possimus? Nam tenetur dolores ex, expedita molestias maiores atque pariatur, nemo veritatis facilis accusamus aliquam odio nihil perferendis architecto. Adipisci dolorem asperiores eum possimus sapiente quaerat maxime molestiae itaque exercitationem facilis? Sit sint assumenda saepe laborum, neque dolor! Quia distinctio magnam dolorum sunt dolores ratione, aliquid reprehenderit quas magni. Tempore ad quasi commodi rem ratione dolorem consectetur eaque beatae id. Impedit tempora, quam veritatis corporis, maxime corrupti voluptatibus quidem amet vero rerum unde et quas hic quae, neque eos obcaecati labore aliquid eveniet?
          </div>
          <label htmlFor="terms">I accept the terms and conditions</label>
          <input id="terms" type="radio" value="true" checked={accept === "true"} onChange={(evt) => { setAccept(evt.target.value); }}/>
          <Alert error={error} setError={setError} color={color} />
          <FilledButton 
            name="Submit"
            submit={false}
            handleClick={handleSubmit}
            background="black"
            width="75%"
            color="white"
          />
        </div>
      </div>
    </Layout>
  )
};

export default Agreement;