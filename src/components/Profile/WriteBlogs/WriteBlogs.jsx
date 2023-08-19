import { Button, TextField, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { writeANewBlog } from "../../../api";
import { MyContext } from "../../../context/Context";

function WriteBlogs() {
  const { user } = useContext(MyContext);

  console.log(user);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  let userId = user.user._id;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          id="outlined-required"
          label="Title"
          sx={{ marginBottom: "20px", width: isMatch ? "500px" : "270px" }}
        />{" "}
        <TextField
          label="Write about it"
          multiline
          rows={isMatch ? 23 : 5}
          sx={{
            height: isMatch ? "600px" : "100px",
            width: isMatch ? "800px" : "300px",
          }}
        />
        <Button
          variant="outlined"
          sx={{
            width: "250px",
            height: "60px",
            borderRadius: "15px",
            backgroundColor: "#002244",
            color: "white",
            "&:hover": {
              backgroundColor: "#002244",
            },
          }}
          onClick={() => writeANewBlog(userId)}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}

export default WriteBlogs;
