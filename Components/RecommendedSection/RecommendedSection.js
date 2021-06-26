import React from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import CommonButton from "../Shared/Button/Button";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import BlogCard from "./Card";
import img1 from "../../public/img/Docs_thumb.jpg";
import img2 from "../../public/img/CaseStudies_thumb.jpg";
import img3 from "../../public/img/Blog_tile.jpg";

const RecommendedSection = () => {
  const CardDetails = [
    {
      article:
        "Case studies that illustrate how Contentstack’s headless CMS helps global corporations create better digital experiences faster, and why your organization should never settle for inferior content experience platforms.",
      img: img2,
    },
    {
      article:
        "how Contentstack’s headless CMS helps global corporations create better digital experiences faster, and why your organization should never settle for inferior content experience platforms.",
      img: img1,
    },
    {
      article:
        "Learn more about the headless CMS technology, news, tips, and best practices, including CXPs, DXPs, content hubs, SaaS CMS, and more!",
      img: img3,
    },
  ];

  return (
    <Recom>
      <Container>
        <Title>Recommended Resources</Title>
        <Grid container spacing={3}>
          {CardDetails.map((card, cardInd) => (
            <BlogCard card={card} key={cardInd + 1} />
          ))}
        </Grid>
      </Container>
      <TextDiv className={styles.TextDiv}>
        <TextContain>
          <MainText>Try it ot believe it</MainText>
          <Div>
            <CommonButton
              outline="false"
              bgColor="#eb5646"
              title="Get A Demo"
              link="/About"
            />
          </Div>
          <Div>
            <CommonButton
              outline="true"
              bgColor="#eb5646"
              title="Free Trial"
              link="/About"
            />
          </Div>
        </TextContain>
      </TextDiv>
    </Recom>
  );
};

export default RecommendedSection;

const Recom = styled.div`
  height: auto;
  background-color: transparent;
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
  padding: 2rem 0;
`;
const Div = styled.div`
  display: inline-block;
  margin: 0 5px;
`;
const MainText = styled.h2`
  font-size: 60px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
`;
