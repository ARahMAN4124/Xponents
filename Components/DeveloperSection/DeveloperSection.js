import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Styles from "../../styles/Home.module.css";
import CommonButton from "../Shared/Button/Button";

const DeveloperSection = () => {
  return (
    <Developers>
      <DevImg className={Styles.img}></DevImg>
      <DevContainer>
        <Grid container spacing={0}>
          <Grid className={Styles.leftSide} item xs={12} sm={6}>
            <MainText color="#ffffff">Developers</MainText>
            <Text color="#EB5646">Free to Build. Freed from fixes.</Text>
            <Para color="#ffffff">
              Finally developers can build cool digital experiences faster with
              an agnostic framework that makes integrations across multiple
              channels a breeze.
            </Para>
            <CommonButton
              outline="false"
              bgColor="#eb5646"
              title="Learn More"
              link="/About"
            />
          </Grid>
          <Grid className={Styles.rightSide} item xs={12} sm={6}>
            <MainText color="#ffffff">Business Users</MainText>
            <Text color="rgb(41, 16, 88)">Empowered to do more faster.</Text>
            <Para color="#ffffff">
              Take control of content creation with an intuitive experience that
              lets you build more, publish faster, and get more results from
              your digital content strategy.
            </Para>
            <CommonButton
              outline="false"
              bgColor="#2a0f57"
              title="Learn More"
              link="/About"
            />
          </Grid>
        </Grid>
      </DevContainer>
    </Developers>
  );
};

export default DeveloperSection;

const Developers = styled.main`
  width: 100%;
  height: auto;
`;
const DevImg = styled.div`
  height: 300px;
`;
const DevContainer = styled.div`
  width: 100%;
`;
const MainText = styled.h2`
  color: ${({ color }) => color || "pink"};
  font-size: 45px;
  font-weight: 620;
`;
const Text = styled.h4`
  color: ${({ color }) => color || "pink"};
  font-size: 30px;
`;
const Para = styled.p`
  font-size: 22px;
  color: ${({ color }) => color || ""};
`;
