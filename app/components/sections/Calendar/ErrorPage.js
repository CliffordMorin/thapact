import React from "react";
import { Paper, Typography, Grid, Box, Button, Link } from "@mui/material";

const ErrorPage = ({ error }) => {
  const mailtoLink = `mailto:cliffthedev@gmail.com?subject=Tha%20Pact%20Calendar%20Error&body=${encodeURIComponent(
    `An error occurred: ${error}`
  )}`;
  return (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Box className="w-full md:w-1/2 text-center">
        <Paper className="p-4 md:p-8" sx={{ backgroundColor: "#FEFCE8" }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, textAlign: "center", color: "#333333" }}
          >
            There was an error loading the shows, reload the page to try again.
            If the problem persists, please contact us or my website developer.
          </Typography>
          <Link href={mailtoLink} target="_blank">
            <Button
              variant="contained"
              size="medium"
              sx={{
                my: 2,
                backgroundColor: "#00B4B3",
                color: "background.paper",
                "&:hover": {
                  backgroundColor: "#00d9d8",
                },
              }}
            >
              Contact My Developer Here
            </Button>
          </Link>

          <Typography variant="h6" color="text.colorful">
            {error}
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ErrorPage;
