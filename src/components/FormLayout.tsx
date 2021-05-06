import { ReactNode } from "react";
import "../styles/FormLayout.css";

interface Props {
  children?: ReactNode;
  title: string;
}

const Layout: React.FC<Props> = ({
  children,
  title
}) => {

  return (
    <div id="form-container">
      <div className="title-container">
        <span>{title}</span>
      </div>
      <div className="main-form-container">{children}</div>
    </div>
  );
};

export default Layout;