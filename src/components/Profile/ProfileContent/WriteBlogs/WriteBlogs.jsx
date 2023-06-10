import { Button, TextField } from "@mui/material";
import React from "react";

function WriteBlogs() {
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
          defaultValue="Hello World"
        />{" "}
        <TextField
          label="Write about it"
          multiline
          maxRows={20}
          sx={{ height: "100px", width: "800px" }}
        />
        <Button>Publish</Button>
      </div>
    </div>
  );
}

export default WriteBlogs;
