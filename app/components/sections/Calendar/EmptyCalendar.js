import React from "react";
import { Paper, Typography, Grid, Box, Link, Button } from "@mui/material";
import { SiBandsintown } from "react-icons/si";

// const API_KEY = process.env.NEXT_PUBLIC_BANDSINTOWN_API_KEY;
const ARTIST_ID = "15570112";

const EmptyCalendar = ({ apiKey }) => {
  return (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Box className="w-full md:w-1/2 my-0 md:my-4 text-center">
        <Paper className="p-4 md:p-8" sx={{ backgroundColor: "#FEFCE8" }}>
          <Typography
            variant="h3"
            sx={{ mb: 2, textAlign: "center", color: "#333333" }}
          >
            No shows scheduled
          </Typography>
          <Typography variant="h6">
            There are currently shows scheduled. Please check back later! Or you
            can track us on Bandsintown to get notified when new shows are
            announced.
          </Typography>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href={`https://bandsintown.com/artist-subscribe/${ARTIST_ID}?app_id=${apiKey}&came_from=267&utm_source=public_api&utm_medium=api&utm_campaign=play_my_city&play_my_city=true`}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: "#00B4B3",
                  color: "background.paper",
                  "&:hover": {
                    backgroundColor: "#00d9d8",
                  },
                }}
              >
                <SiBandsintown size="1.5em" style={{ marginRight: "25px" }} />
                Request a show
              </Button>
            </Link>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
};

export default EmptyCalendar;
