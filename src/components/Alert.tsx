import { useEffect, useState } from "react";
import "../styles/Alert.css";

interface Props {
  error: string | null;
  setError: (newValue: string | null) => void
  closable?: boolean;
}

const Alert: React.FC<Props> = ({
  error,
  setError,
  closable = true
}) => {
  const [close, setClose] = useState(false);

  useEffect(() => {
    setClose(false);
  }, [error]);

  if (close || !error) {
    return <></>;
  } else {
    return (
      <>
        <div id="alert-body">
          <p>{error}</p>
          <div
            className={closable ? "" : "d-none"}
            id="close-btn"
            onClick={() => {
              setClose(true);
              setError(null);
            }}
          >
            X
          </div>
        </div>
      </>
    );
  }
};

export default Alert;