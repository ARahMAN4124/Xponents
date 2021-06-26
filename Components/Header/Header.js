import React from "react";
import CommonButton from "../Shared/Button/Button";
import style from "../../styles/Home.module.css";
import TextContainer from "../Shared/TextContainer/TextContainer";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";

const Header = () => {
  const text = {
    title: "HOW DOES TRADITIONAL CMS MANAGE TO MANAGE SO BADLY?",
    article:
      "See how to empower teams, free developers, and get more done faster with headless, agile CMS",
  };

  return (
    <header className={style.mainHeader}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextHeader>
              <TextContainer text={text} />
            </TextHeader>
            <div style={{ padding: "2rem 0" }}>
              <CommonButton
                outline="true"
                bgColor="rgb(245,196,0)"
                title="Learn More"
                link="/About"
              />
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;

const TextHeader = styled.div`
  color: #fff;
`;
