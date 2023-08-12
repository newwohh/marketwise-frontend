import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, ThemeProvider } from "@mui/material";
import theme from "../../../styles/Theme";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../../store/store-actions";
import BlogCard from "./BlogCard";
import BlogLoader from "./BlogLoader";

function BlogsContent() {
  let dispatch, blogs;
  dispatch = useDispatch();
  const { allblogs } = useSelector((state) => state.news);

  const getProducts = React.useCallback(
    () => dispatch(getAllBlogs()),
    [dispatch]
  );

  useEffect(() => getProducts(), [getProducts]);

  allblogs === undefined || allblogs.data === undefined
    ? (blogs = [{ title: "loading" }])
    : (blogs = allblogs.data);

  // console.log(allblogs);

  return (
    <main style={{ backgroundColor: "#F0F8FF" }}>
      <ThemeProvider theme={theme}>
        <section>
          <Box
            sx={{
              padding: { xl: "150px", xs: "50px" },
              paddingTop: { xs: 20 },
            }}
          >
            <div>
              <Typography
                variant="h3"
                sx={{ textDecoration: "underline", fontSize: { xs: "25px" } }}
              >
                MarketWise Blogs
              </Typography>
            </div>
            <div style={{ marginTop: "50px" }}>
              <Grid
                container
                spacing={{ xs: 1, md: 3, sm: 1 }}
                columns={{ xs: 4, sm: 1, md: 12 }}
              >
                {allblogs === undefined || allblogs.data === undefined
                  ? [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10].map((el, i) => {
                      return <BlogLoader i={i} />;
                    })
                  : blogs?.map((el, i) => {
                      return (
                        <BlogCard
                          i={i}
                          title={el.title}
                          description={el.description}
                          key={i}
                        />
                      );
                    })}
              </Grid>
            </div>
          </Box>
        </section>
      </ThemeProvider>
    </main>
  );
}

export default BlogsContent;
