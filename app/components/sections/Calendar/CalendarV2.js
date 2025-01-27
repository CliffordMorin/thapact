"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  Link,
} from "@mui/material";
import { SiBandsintown } from "react-icons/si";
import UpcomingEventCard from "./UpcomingEventCard";
import PrevEventCard from "./PrevEventCard";
import EmptyCalendar from "./EmptyCalendar";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

const ARTIST_ID = "15570112";

const CalendarV2 = () => {
  const [visibleEvents, setVisibleEvents] = useState(5);
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toggleShows, setToggleShows] = useState("UPCOMING SHOWS");
  const [date, setDate] = useState("upcoming");
  const [apiKey, setApiKey] = useState("");

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
      const response = await fetch(`/api/events?date=${selectedDate}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch events");
      }
      if (selectedDate === "past") {
        data.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
      }

      setEvents(data);
    } catch (error) {
      console.error("Failed to fetch events for date:", selectedDate, error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    setVisibleEvents(visibleEvents + 5);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchEvents(date);
    }
  }, [fetchEvents, date]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fetchApiKey = async () => {
        const response = await fetch("/api/events");
        const data = await response.json();
        setApiKey(data.apiKey);
      };

      fetchApiKey();
    }
  }, []);

  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        sx={{
          pt: 5,
          pb: 2,
          color: "#FEFCE8",
          fontFamily: "Canela-Light, sans-serif",
          fontWeight: "bold",
          fontSize: "3rem",
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
            events.slice(0, visibleEvents).map((event) => (
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
            <EmptyCalendar apiKey={apiKey} />
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
            {apiKey && (
              <Link
                href={`https://bandsintown.com/artist-subscribe/${ARTIST_ID}?app_id=${apiKey}&came_from=267&utm_source=public_api&utm_medium=api&utm_campaign=track`}
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
                  Track on Bandsintown
                </Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CalendarV2;
