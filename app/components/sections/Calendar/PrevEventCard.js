import { Box, Typography, Button, Link } from "@mui/material";

const PrevEventCard = ({ event }) => {
  const { venue, datetime, url } = event;
  const date = new Date(datetime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const formatName = venue?.name?.split("@");
  const bandName = formatName[0]?.trim();
  const venueFormatName = formatName[1]?.trim()?.split("(");
  const venueName =
    venueFormatName && venueFormatName.length > 0
      ? venueFormatName[0]?.trim()
      : null;

  const venueDisplay = venueName ? venueName : null;
  const bandDisplay = bandName ? bandName : null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        backgroundColor: "#FEFCE8",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 4,
        "&:not(:last-child)": {
          mb: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#333333",
          color: "#FEFCE8",
          py: 1,
          px: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "text.dark",
            color: "text.colorful",
            borderRadius: 2,
            px: 1,
            py: 0.5,
            mr: 1,
          }}
        >
          <Typography variant="body">{`${venue.city}, ${venue.country}`}</Typography>
        </Box>
        <Typography variant="body">{venueDisplay}</Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#333333",
            borderRadius: 2,
            px: 2.5,
            py: 2,
            mr: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="#FEFCE8">
            {date.split(" ")[0].toUpperCase()}
          </Typography>
          <Typography variant="body1" color="#FEFCE8">
            {date.split(" ")[1]}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: "#000000",
            mr: 2,
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          {bandDisplay}
        </Typography>
        <Link href={url} target="_blank" rel="noreferrer">
          <Button
            variant="contained"
            size="medium"
            sx={{ color: "#FEFCE8", bgcolor: "#333333" }}
          >
            VIEW EVENT
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PrevEventCard;
