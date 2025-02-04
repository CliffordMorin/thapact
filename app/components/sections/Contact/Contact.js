"use client";

import React from "react";
import { Typography, Container, Paper, Divider } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 py-7">
      <Container className="h-full pt-5 max-w-7xl flex justify-center items-center">
        <Paper
          elevation={16}
          sx={{
            py: 5,
            px: 5,
            bgcolor: "#FEFCE8",
            "@media (max-width: 600px)": {
              bgcolor: "#FEFCE8",
              px: 1,
              py: 1,
            },
          }}
        >
          <Fade>
            <Typography
              variant="h2"
              align="center"
              sx={{
                color: "black",
                mb: { xs: 4, sm: 4 },
                mt: { xs: 2, sm: 2 },
                fontSize: { xs: "3rem", md: "4rem" },
                fontFamily: "Canela, serif",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </Typography>
            <Divider
              sx={{
                my: 4,
                borderBottomWidth: "4px",
                width: "15%",
                mx: "auto",
                bgcolor: "#000000",
              }}
            />
            <ContactForm />
          </Fade>
        </Paper>
      </Container>
    </div>
  );
};

export default Contact;
