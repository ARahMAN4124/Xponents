import React from "react";
import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";
import Image from "next/image";
import CommonButton from "../Shared/Button/Button";
import img1 from "../../public/img/cloudinary-icon-logo.png";
import img2 from "../../public/img/elasticsearch-thumb-logo.png";
import img3 from "../../public/img/commercetools-logo-thumb-icon.png";
import img4 from "../../public/img/thumb-icon-ga.png";
import img5 from "../../public/img/thumb-icon-shopify.png";
import img6 from "../../public/img/bynder-icon-logo.png";
import img7 from "../../public/img/brandfolder-icon-logo.png";
import img8 from "../../public/img/gatsby-monogram-logo.png";
import img9 from "../../public/img/dynamic-yield-logo.png";
import img10 from "../../public/img/translations.com-full-logo.png";
import img11 from "../../public/img/thumb-icon-ibm-watson.png";

const IntegrationsSection = () => {
  const icons = [
    {
      icon: img1,
      title: "Cloudinary",
    },
    {
      icon: img2,
      title: "Elasticsearch",
    },
    {
      icon: img3,
      title: "commercetools",
    },
    {
      icon: img4,
      title: "Google Analytics",
    },
    {
      icon: img5,
      title: "Shopify",
    },
    {
      icon: img6,
      title: "Bynder",
    },
    {
      icon: img7,
      title: "Brandfolder",
    },
    {
      icon: img8,
      title: "Gatsby",
    },
    {
      icon: img9,
      title: "Dynamic Yield",
    },
    {
      icon: img10,
      title: "Translations.com",
    },
    {
      icon: img11,
      title: "IBM Watson",
    },
  ];
  return (
    <div style={{ padding: "5rem 0 1rem 0" }}>
      <Container>
        <H2>Integrations for Every Industry</H2>
        <P>
          Our API-first headless CMS makes it easy. Easily integrate your
          preferred business and marketing technologies to meet your needs.
        </P>
        <div style={{ textAlign: "center" }}>
          <CommonButton
            outline="false"
            bgColor="#EB5646"
            title="See all Integrations"
            link="/About"
          />
        </div>
        <Div>
          {icons.map((icon) => (
            <Details key={1}>
              <Img>
                <Image
                  src={icon.icon}
                  alt="img"
                  style={{ width: "20px", height: "20px" }}
                />
              </Img>
              <Text>{icon.title}</Text>
            </Details>
          ))}
        </Div>
      </Container>
    </div>
  );
};

export default IntegrationsSection;

const H2 = styled.h2`
  text-align: center;
  font-size: 45px;
  margin: 0 0 2rem 0;
  color: #2a0f57;
`;
const P = styled.p`
  text-align: center;
  font-size: 22px;
  margin: 0 0 1.2rem 0;
  color: #444444;
`;
const Div = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  flex-wrap: wrap;
`;
const Details = styled.div`
  text-align: center;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled(Grid)`
  padding: 20px;
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  background-color: #f8f8f8;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #dadada;
  }
`;
const Text = styled.p`
  font-size: 22px;
`;
