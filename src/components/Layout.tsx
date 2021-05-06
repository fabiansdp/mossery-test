import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import "../styles/Layout.css";

interface Props {
  children?: ReactNode;
  title?: string;
  background?: string;
}

const Layout: React.FC<Props> = ({
  children,
  title,
  background = "#ff9f1c",
}) => {

  if (!title) {
    title = "Mossery Test";
  } else {
    title = title + " | Mossery Test";
  }

  return (
    <div id="parent-container">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div id="main-container" style={{background : background}}>{children}</div>
    </div>
  );
};

export default Layout;