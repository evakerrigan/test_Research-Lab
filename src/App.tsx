import { Container, Grid, Typography } from '@mui/material';
import './App.css'
import { Authorization } from './components/Authorization/Authorization';
import { NavBar } from './components/NavBar/NavBar';
import BackgroundImage from './assets/image/background.png';

function App() {

  return (
    <Container fixed
      sx={{
        width: 1440,
        height: 800,
        backgroundColor: '#E7E2DE',
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={6} lg={6}>
          <NavBar />
        </Grid>
        <Grid item xs={6} lg={6} pt={8} pl={24.5}>
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
