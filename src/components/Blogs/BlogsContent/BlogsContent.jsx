import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid, ThemeProvider } from "@mui/material";
import theme from "../../../styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../../store/store-actions";

function BlogsContent() {
  const [dataApi, setDataApi] = React.useState("");

  let dispatch, blogs;
  dispatch = useDispatch();
  const { allblogs } = useSelector((state) => state.news);

  const getProducts = React.useCallback(() => {
    dispatch(getAllBlogs());
  }, [dataApi]);

  useEffect(() => {
    getProducts();
  }, [dataApi]);

  blogs = allblogs.data;
  console.log(blogs);
  return (
    <main style={{ backgroundColor: "#F0F8FF" }}>
      <ThemeProvider theme={theme}>
        <section>
          <div style={{ padding: "150px" }}>
            <div>
              <Typography variant="h3" sx={{ textDecoration: "underline" }}>
                MarketWise Blogs
              </Typography>
            </div>
            <div style={{ marginTop: "50px" }}>
              <Grid
                container
                spacing={{ xs: 1, md: 3, sm: 1 }}
                columns={{ xs: 4, sm: 1, md: 12 }}
              >
                {blogs.map((el, i) => {
                  return (
                    <Grid item xs={3} sm={4} md={4} key={i}>
                      <Card sx={{ width: 450, height: "400px" }} key={i}>
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Article
                          </Typography>
                          <Typography variant="h5" component="div">
                            {el.title}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Author
                          </Typography>
                          <Typography variant="body2">
                            {el.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button>View full article</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </section>
      </ThemeProvider>
    </main>
  );
}

export default BlogsContent;
