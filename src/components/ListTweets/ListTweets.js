import "./ListTweets.scss";
import { Grid } from "@mui/material";

const ListTweets = (props) => {
  const { allTweets } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>Aun no hay Tweets...</h2>
      </div>
    );
  }

  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          Tweet...
        </Grid>
      ))}
    </Grid>
  );
};

export default ListTweets;
