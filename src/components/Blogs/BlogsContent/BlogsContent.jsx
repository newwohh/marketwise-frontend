import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, ThemeProvider } from "@mui/material";
import theme from "../../../styles/Theme";

function BlogsContent() {
  return (
    <main style={{ backgroundColor: "#F0F8FF" }}>
      <ThemeProvider theme={theme}>
        <section>
          <div style={{ padding: "150px" }}>
            <div>
              <Typography variant="h3" sx={{ textDecoration: "underline" }}>
                TradeView Blogs
              </Typography>
            </div>
            <div style={{ marginTop: "50px" }}>
              <Card sx={{ width: 350, height: "400px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Article
                  </Typography>
                  <Typography variant="h5" component="div">
                    Title
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Author
                  </Typography>
                  <Typography variant="body2">Description</Typography>
                </CardContent>
                <CardActions>
                  <Button>View full article</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </section>
      </ThemeProvider>
    </main>
  );
}

export default BlogsContent;
