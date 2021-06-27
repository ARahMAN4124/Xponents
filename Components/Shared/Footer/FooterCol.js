import React from "react";
import { Grid, Typography, Box} from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import Link from "next/link";
import MaLink from '@material-ui/core/Link';

const FooterCol = ({ title, items }) => {
  return (
    <Grid item xs={6} md={3}>
      <Box m={1}>
        <Box fontWeight={700} m={1}>
          {title}
        </Box>
        {
            // eslint-disable-next-line @next/next/link-passhref
            items.map((links)=> <Link key={1} href={links.link}><MaLink display="block">
            {links.name}
          </MaLink></Link>)
        }
        
      </Box>
    </Grid>
  );
};

export default FooterCol;
