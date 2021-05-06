import { Link } from 'react-router-dom';
import "../styles/Button.css";

interface Props {
  name: string,
  link: string,
  background: string,
  color: string,
}

const ColoredButton : React.FC<Props> = ({name, link, background, color}) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <button type="button" style={{background: background, color: color}}>
        <b>{name}</b>
      </button>
    </Link>
  )
}

export default ColoredButton;