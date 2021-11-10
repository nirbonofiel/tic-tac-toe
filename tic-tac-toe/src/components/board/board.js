import './board.css';
import {Paper, Grid} from '@material-ui/core'
import Box from '../box/box'

const Board = () => {
  return (
         <Grid container  spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper>
                  <Box/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Board;
