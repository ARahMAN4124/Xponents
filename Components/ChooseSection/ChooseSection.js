import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";
import tum1 from "../../public/img/ContentFaster_video.jpg";
import tum2 from "../../public/img/ContentEasier_video.jpg";
import tum3 from "../../public/img/Enterprise_video.jpg";
import VideoPlayer from "../Shared/VideoPlayer/VideoContainer";

const ChooseSection = () => {
  const buttonDetail = [
    {
      title: " Creating Content Faster",
      text: "Intuitively designed so marketers can do more faster, flying solo - developers rejoice.",
      videoLink: "https://youtu.be/5Piwk5gRJfY",
      tum: tum1,
    },
    {
      title: "Managing Content Easier",
      text: "Get more content in more places with less hassle - on one platform.",
      videoLink: "https://youtu.be/5Piwk5gRJfY",
      tum: tum2,
    },
    {
      title: "Made for the Enterprise",
      text: "Built in the cloud to scale with exceptional support to accelerate your digital strategy",
      videoLink: "https://youtu.be/5Piwk5gRJfY",
      tum: tum3,
    },
  ];

  const [button, setButton] = useState(buttonDetail[0]);
  console.log(button);
  const handleButton = (btn) => {
    setButton(btn);
  };

  console.log(button);

  return (
    <div style={{ padding: "5rem 0" }}>
      <Container>
        <H2>Why Choose Contentstack?</H2>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <Grid container spacing={3}>
              {buttonDetail.map((button, index) => (
                <Buttons
                  onClick={() => handleButton(button)}
                  key={index + 1}
                  item
                  xs={12}
                >
                  <H3>{button.title}</H3>
                  <P>{button.text}</P>
                </Buttons>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <VideoContainer>
              <VideoPlayer tum={button.tum} src={button.videoLink}/>
            </VideoContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ChooseSection;

const H2 = styled.h2`
  text-align: center;
  font-size: 45px;
  font-weight: 650;
  color: #2a0f57;
`;

const Buttons = styled(Grid)`
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: rgb(241, 237, 255);
  }
`;
const H3 = styled.h3`
  font-size: 30px;
  margin: 0;
  font-weight: 600;
  color: #7c4dff;
`;
const P = styled.p`
  font-size: 22px;
  margin-top: 10px;
`;

const VideoContainer = styled.div`
  background-color: #efefef;
  display: flex;
  justify-content: center;
  border: 1px solid rgb(42, 15, 87);
  padding: 30px;
`;
