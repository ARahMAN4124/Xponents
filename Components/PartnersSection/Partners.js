import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Container, Grid } from "@material-ui/core";
import img1 from "../../public/img/algolia.png";
import img2 from "../../public/img/commercetools.png";
import img3 from "../../public/img/dynamic-yield-logo.png";
import img4 from "../../public/img/epam-systems.png";
import img5 from "../../public/img/valtech-gray.png";
import img from "../../public/img/MACH_Alliance_logo.svg";
import CommonButton from "../Shared/Button/Button";

const Partners = () => {
  const icons = [img1, img2, img3, img4, img5];
  return (
    <Div>
      <Container>
        <H2>Our Partners are Catalysts for Success</H2>
        <P>Industry-leading Technologies and Service Providers</P>
        <Img container spacing={4}>
          {icons.map((icon) => (
            <Grid key={1} item xm={14}>
              <Image src={icon} width={130} height={45} alt="img" />
            </Grid>
          ))}
        </Img>
        <P>
          Our Catalysts are partners with years of experience accelerating
          projects with some of the  best-of-breed technologies.
        </P>
        <Button>
          <div style={{ display: "inline-block", margin: "0 10px" }}>
            <CommonButton
              outline="false"
              bgColor="#EB5646"
              title="Find a Partner"
              link="/About"
            />
          </div>
          <div style={{ display: "inline-block", margin: "0 10px" }}>
            <CommonButton
              outline="false"
              bgColor="#EB5646"
              title="Partner Overview"
              link="/About"
            />
          </div>
        </Button>
        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            style={{ minHeight: "100%" }}
          >
            <Grid item xs={12} md={4}>
              <Image alt="img" src={img} width={220} height={200} />
            </Grid>
            <Grid item xs={12} md={8}>
              <p style={{ fontSize: "22px" }}>
                Contentstack is a founding member of the MACH Alliance,
                providing the industry leading best-of-breed CMS and Experience
                Management solutions via microservices, API-first, cloud-native
                SaaS, and headless technologies.
              </p>
              <CommonButton
                outline="false"
                bgColor="#EB5646"
                title="Learn More"
                link="/About"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Div>
  );
};

export default Partners;

const Div = styled.div`
  padding: 5rem 0;
`;
const H2 = styled.h2`
  text-align: center;
  font-size: 60px;
  margin: 0;
  color: #2a0f57;
  font-weight: 650;
`;
const P = styled.p`
  text-align: center;
  font-size: 25px;
`;
const Img = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;
`;
const Button = styled.div`
  text-align: center;
`;
const Box = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 2rem;
  border: 15px solid #FFD433;
`;
