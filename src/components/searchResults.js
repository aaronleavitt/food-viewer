import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const SearchResults = ({ food, title }) => {
  return (
    <>
      {food.length > 0 ? <Typography variant="h3">{title}</Typography> : <></>}

      <Grid container spacing={2} sx={{ pt: 2 }}>
        {food.map((value, index) => {
          return (
            <Grid key={index} item xs={6} md={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={value.image_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.location.address1}
                    <br />
                    {value.location.city}, {value.location.state}{" "}
                    {value.location.zip_code}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body3"
                    component="div"
                    sx={{ color: "dodgerblue" }}
                  >
                    Rating: {value.rating} ({value.review_count})
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Details</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchResults;
