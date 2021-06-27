import React from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import FooterCol from "./FooterCol";

const Footer = () => {
  const product = [
    { name: "Features", link:"/about" },
    { name: "For IT & Developers", link:"/about" },
    { name: "Integrations", link:"/about" },
    { name: "Pricing", link:"/about" },
    { name: "ROI Calculation", link:"/about" },
    { name: "Customer Success", link:"/about" },];
  const users = [
    { name: "Link One", link:"/about" },
    { name: "Link Two", link:"/about" },
    { name: "Link Three", link:"/about" },
    { name: "Link four", link:"/about" } ];
  const education = [
    { name: "Link One", link:"/about" },
    { name: "Link Two", link:"/about" },
    { name: "Link Three", link:"/about" },
    { name: "Link four", link:"/about" } ];
  const company = [
    { name: "Link One", link:"/about" },
    { name: "Link Two", link:"/about" },
    { name: "Link Three", link:"/about" },
    { name: "Link four", link:"/about"}  ];
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid
          container
          spacing={4}
        >
          <FooterCol title="Product" items={product} />
          <FooterCol title="Users" items={users} />
          <FooterCol title="Education" items={education}/>
          <FooterCol title="Company" items={company}/>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
