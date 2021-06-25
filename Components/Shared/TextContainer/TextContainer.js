import React from "react";
import styled from "styled-components";

const TextContainer = ({ text }) => {
  const { title, article } = text;
  
  return (
    <div className="textContainer">
      <Text>{title}</Text>
      <Article>{article}</Article>
    </div>
  );
};

export default TextContainer;

const Text = styled.h2`
    font-size: 50px;
  `;
  const Article = styled.article`
    font-size: 22px;
  `;