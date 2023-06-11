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
          sx={{ marginBottom: "20px", width: "500px" }}
        />{" "}
        <TextField
          label="Write about it"
          multiline
          maxRows={20}
          sx={{ height: "600px", width: "800px" }}
        />
        <Button variant="outlined" sx={{ width: "250px", height: "50px" }}>
          Publish
        </Button>
      </div>
    </div>
  );
}

export default WriteBlogs;
