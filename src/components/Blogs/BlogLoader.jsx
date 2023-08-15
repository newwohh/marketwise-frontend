import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

function BlogLoader(props) {
  return (
    <Grid item xs={3} sm={4} md={4} key={props.i}>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton variant="rectangular" width={450} height={300} />
        <Skeleton width={450} />
        <Skeleton width={450} />
      </Box>
    </Grid>
  );
}

export default BlogLoader;
