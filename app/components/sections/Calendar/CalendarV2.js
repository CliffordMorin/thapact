"use client";

import { React, useState, useEffect, useCallback } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  Link,
} from "@mui/material";
import Head from "next/head";
import { SiBandsintown } from "react-icons/si";
import UpcomingEventCard from "./UpcomingEventCard";
import PrevEventCard from "./PrevEventCard";
import EmptyCalendar from "./EmptyCalendar";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

const API_KEY = process.env.NEXT_PUBLIC_BANDSINTOWN_API_KEY;
const ARTIST_ID = "15570112";

const CalendarV2 = () => {
  const [visibleEvents, setVisibleEvents] = useState(5);
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toggleShows, setToggleShows] = useState("UPCOMING SHOWS");
  const [date, setDate] = useState("upcoming");

  const handleToggleShows = () => {
    if (toggleShows === "PREVIOUS SHOWS") {
      setToggleShows("UPCOMING SHOWS");
      fetchEvents("upcoming");
      setDate("upcoming");
    } else {
      setToggleShows("PREVIOUS SHOWS");
      fetchEvents("past");
      setDate("past");
    }
  };

  const fetchEvents = useCallback(async (selectedDate) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://rest.bandsintown.com/v3.1/artists/thapact/events?app_id=${API_KEY}&date=${selectedDate}`
      );
      const data = await response.json();
      if (selectedDate === "past") {
        data.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
      }

      setEvents(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    setVisibleEvents(visibleEvents + 5);
  };

  useEffect(() => {
    fetchEvents(date);
  }, [fetchEvents, date]);

  return (
    <div>
      <Head>
        <title>ThaPact | Calendar</title>
        <meta
          name="description"
          content="ThaPact Calendar with dates of upcoming shows, concerts and public events."
        />
        <link rel="canonical" href="/calendar" />
      </Head>
      <Typography
        variant="h2"
        align="center"
        sx={{
          pt: 5,
          pb: 2,
          color: "#FEFCE8",
          fontFamily: "Canela-Light, sans-serif",
          fontWeight: "bold",
        }}
      >
        <div>{toggleShows}</div>
      </Typography>
      <Divider
        sx={{
          zIndex: "100",
          backgroundColor: "#FEFCE8",
          height: "2px",
          width: "100px",
          margin: "auto",
          mb: 2,
        }}
      />

      <Container sx={{ mb: 7 }}>
        <Grid container spacing={{ xs: 3, md: 3 }}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{
                mt: 2,
                backgroundColor: "#FEFCE8",
                color: "#000000",
                "&:hover": {
                  backgroundColor: "#E5E4C2",
                },
              }}
              onClick={handleToggleShows}
            >
              <Typography variant="body1">
                View{" "}
                {toggleShows === "UPCOMING SHOWS"
                  ? "PREVIOUS SHOWS"
                  : "UPCOMING SHOWS"}
              </Typography>
            </Button>
          </Grid>
          {isLoading ? (
            <LoadingPage />
          ) : events.length > 0 ? (
            events?.slice(0, visibleEvents).map((event) => (
              <Grid key={event.id} item xs={12}>
                {toggleShows === "UPCOMING SHOWS" ? (
                  <UpcomingEventCard event={event} />
                ) : (
                  <PrevEventCard event={event} />
                )}
              </Grid>
            ))
          ) : error ? (
            <ErrorPage error={error} />
          ) : (
            <EmptyCalendar />
          )}
          {visibleEvents < events.length && (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: "#FEFCE8",
                  color: "#000000",
                  "&:hover": {
                    backgroundColor: "#E5E4C2",
                  },
                }}
                onClick={handleLoadMore}
              >
                Show More Events ({events.length - visibleEvents})
              </Button>
            </Grid>
          )}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href={`https://bandsintown.com/artist-subscribe/${ARTIST_ID}?app_id=${API_KEY}&came_from=267&utm_source=public_api&utm_medium=api&utm_campaign=track`}
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
                Track On Bandsintown
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CalendarV2;