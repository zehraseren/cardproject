import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function Course({ image, title, description }) {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt="Kurslarım" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Course;
