import React from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import CommonButton from "../Shared/Button/Button";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Card from "./Card";
import img1 from "../../public/img/Docs_thumb.jpg"
import img2 from "../../public/img/CaseStudies_thumb.jpg"
import img3 from "../../public/img/Blog_tile.jpg"

const RecommendedSection = () => {
  const CardDetails = [
    {
      title: "Recommended Resources one",
      img:img1,
    },
    {
      title: "Recommended Resources Two",
      img:img2,
    },
    {
      title: "Recommended Resources Three",
      img:img3,
    },
  ];

  return (
    <Recom>
      <Container>
        <Title>Recommended Resources</Title>
        <Grid container spacing={3}>
          {CardDetails.map((card, cardInd) => <Card card={card} key={cardInd+1} />)}
        </Grid>
      </Container>
      <TextDiv className={styles.TextDiv}>
        <TextContain>
          <MainText>Try it ot believe it</MainText>
          <CommonButton
            outline="false"
            bgColor="#eb5646"
            title="Get A Demo"
            link="/About"
          />
          <CommonButton
            outline="true"
            bgColor="#eb5646"
            title="Free Trial"
            link="/About"
          />
        </TextContain>
      </TextDiv>
    </Recom>
  );
};

export default RecommendedSection;

const Recom = styled.div`
  height: 400px;
  background-color: red;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
`;
const TextDiv = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;
const TextContain = styled.div`
  padding: 3rem 0;
`;
const MainText = styled.h2`
  font-size: 60px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
`;
