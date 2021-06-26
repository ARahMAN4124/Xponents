import React from "react";
import Link from "next/link";
import styled from "styled-components";

const CommonButton = (props) => {
  const { link, outline, title, bgColor } = props;
  let hover;
  if (outline == "false") {
    hover = "transparent";
  }

  const Button = styled.button`
    color: #ffffff;
    background-color: ${({ bgColor }) => bgColor || "blue"};
    padding: 0.5rem 2rem;
    border-radius: 10px;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    border: 3px solid ${bgColor};
    display: inline-block;
    cursor: pointer;
    &:hover {
      background-color: ${outline == "true" ? bgColor : hover};
      color: ${outline == "true" ? "" : bgColor};
    }
  `;

  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link style={{ color: "#fffffLinkf" }} href={link}>
      <Button bgColor={outline === "true" ? "transparent" : bgColor}>
        {title}
      </Button>
    </Link>
  );
};

export default CommonButton;
