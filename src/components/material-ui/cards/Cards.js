import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";

const Cards = () => {
  return (
    <Grid container spacing={2} justify="center">
      {[0, 1, 2].map((value) => (
        <Grid key={value} item xs={3} sm={4}>
          <Paper style={{ height: 90, marginBottom: 10 }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
