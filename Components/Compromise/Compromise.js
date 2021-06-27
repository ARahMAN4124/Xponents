import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import CommonButton from "../Shared/Button/Button";
import VideoPlayer from "../Shared/VideoPlayer/VideoContainer";
import tum from "../../public/img/CustomerSuccess_video.jpg";

const Compromise = () => {
  return (
    <div className={styles.div}>
      <Container>
        <H2>
          Care Without Compromise
          <sup>
            <Span>TM</Span>
          </sup>
        </H2>
        <Grid container spacing={3} style={{ paddingTop: "1rem" }}>
          <Grid item xs={6}>
            <Text> We're obsessed with our customer's success</Text>
            <P>
              Our Customer Care team provides exceptional whiteglove service
              with unprecedented response time to support customers' goals.
            </P>
            <CommonButton
              outline="false"
              bgColor="#EB5646"
              title="Learn About Customer Care"
              link="/About"
            />
          </Grid>
          <Grid item xs={6}>
            <VideoContainer>
              <VideoPlayer
                style={{ width: "100%" }}
                tum={tum}
                src="https://youtu.be/djPpnQuBweM"
              />
            </VideoContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Compromise;

const H2 = styled.h2`
  font-size: 50px;
  color: #eb5646;
  margin: 0;
`;
const Span = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const Text = styled.h2`
  color: #ffffff;
  font-size: 50px;
  font-weight: 400;
  margin-top: 15px;
`;
const P = styled.p`
  font-size: 20px;
  color: #ffffff;
  line-height: 2rem;
  padding-bottom: 30px;
`;
const VideoContainer = styled.div`
background-color:#ffffff;
  border: 15px solid #ffffff;
  border-radius: 15px;
  overflow: hidden;
`;
