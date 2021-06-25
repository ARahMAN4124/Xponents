import React from "react";
import { Container, Grid } from "@material-ui/core";
import Image from "next/image";
import TextContainer from "../Shared/TextContainer/TextContainer";
import CommonButton from "../Shared/Button/Button";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import bgImg from "../../public/img/Waves.svg";

const StrongPerformer = () => {
  const text = {
    title:
      "Contentstack named a Strong Performer in the Forrester Wave for Agile CMS",
    titleSize: "35px",
    article:
      "Contentstack named a Strong Performer in the Forrester Wave™ : Agile Content Management Systems (CMSes), Q1 2021",
    articleSize: "22px",
  };
  return (
    <Main className={styles.main}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Img>
              <Image
                src="/img/WaveChart_Homepage.jpg"
                alt="img"
                width={350}
                height={350}
              />
            </Img>
          </Grid>
          <Grid item xs={12} md={7}>
            <Text>
              <TextContainer text={text} />
            </Text>
            <Button>
              <CommonButton
                outline="false"
                bgColor="rgb(235,86,70)"
                title="Learn More"
                link="/About"
              />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

export default StrongPerformer;
const Main = styled.div`
  padding: 5rem 0;
`;

const Img = styled.div`
  height: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  color: #ffffff;
`;
const Button = styled.div`
  margin-top: 1rem;
`;
