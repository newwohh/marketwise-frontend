import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function BlogCard(props) {
  return (
    <Grid item xs={3} sm={4} md={4} key={props.i}>
      <Card
        sx={{
          width: { xs: 200, xl: 450 },
          height: {
            xs: "200",
            xl: "400px",
          },
        }}
        key={props.i}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Article
          </Typography>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Author
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button>View full article</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BlogCard;
