import { Container, Grid, Typography } from '@mui/material';
import { Authorization } from './components/Authorization/Authorization';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <Container fixed
      sx={{
        width: 1440,
        height: 800,
      }}
    >
      <Grid container spacing={0} sx={{width: '1440px'}}>
        <Grid item xs={6} lg={6} sx={{width: '720px'}}>
          <NavBar />
        </Grid>
        <Grid item xs={6} lg={6} pt={8} pl={24.5}  sx={{width: '720px'}}>
          <Typography
            component="div"
            fontSize={24}
            fontWeight={400}
          >
            Welcome to the ...
          </Typography>
          <Authorization />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
