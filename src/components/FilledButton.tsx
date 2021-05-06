import * as React from "react";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  submit?: boolean;
  padding?: string;
  color?: string;
  loading?: boolean;
  fontSize?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const FilledButton: React.FC<Props> = ({
  onClick,
  text,
  padding,
  loading,
  submit,
  fontSize = "1rem",
  fullWidth,
  disabled,
  color
}) => {
  const clickHandler = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!loading && !disabled && onClick) {
      onClick(evt);
    }
  };

  return (
    <>
      <button
        id="container"
        onClick={clickHandler}
        style={{ padding }}
        type={submit ? "submit" : "button"}
      >
        <div id="loader"></div>
        <b>{text}</b>
      </button>
      <style>
          
      </style>
    </>
  );
};

export default FilledButton;