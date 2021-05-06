import "../styles/InputField.css";

interface Props {
  name: string,
  type?: string,
  value: string,
  setValue: (newValue: string) => void,
  placeholder: string
}

const InputField: React.FC<Props> = ({ name, type = "text", value, setValue, placeholder }) => {

  const id = name.toLowerCase().replace(/\s/g, "");

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input id={id} type={type} value={value} onChange={(evt) => { setValue(evt.target.value); }} placeholder={placeholder} />
    </div>
  );
};

export default InputField;