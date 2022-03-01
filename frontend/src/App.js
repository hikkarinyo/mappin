import React from 'react';
import Map, { FullscreenControl, Marker, Popup } from 'react-map-gl';
import { Card, CardContent, Typography, Box, Button, Grid } from '@mui/material';
import './Popup.css'


function App() {

  const [showPopup, setShowPopup] = React.useState(true);

  return <Map
    initialViewState={{
      longitude: 100,
      latitude: 60,
      zoom: 2
    }}
    style={{ width: ' 100vw', height: '100vh' }}
    mapStyle="mapbox://styles/hikkarinyo/cl04s9kbt001l14quv8xnkhj1"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX}

  >
    <Marker longitude={84.94753445606905} latitude={56.46955924473702} anchor="bottom" >
      <img src="/pin.png" />
    </Marker>
    <FullscreenControl />
    {showPopup && (
      <Popup className="" longitude={84.94753445606905} latitude={56.46955924473702}
        anchor="bottom"
        onClose={() => setShowPopup(false)}
      >

        <Typography sx={{ fontSize: '24px', textAlign: 'center' }}>Зорина Алина Александровна</Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
        >

          <Grid xs={4} items><Typography sx={{ fontSize: '14px' }}>выпуск</Typography></Grid>
          <Grid xs={4} items> <Typography sx={{ fontSize: '14px' }}>город</Typography></Grid>
          <Grid xs={4} items> <Typography sx={{ fontSize: '14px' }}>страна</Typography></Grid>
          <Grid xs={4} items><Typography sx={{ fontSize: '14px' }}>2021</Typography></Grid>
          <Grid xs={4} items> <Typography sx={{ fontSize: '14px' }}>Томск</Typography></Grid>
          <Grid xs={4}items> <Typography sx={{ fontSize: '14px' }}>Россия</Typography></Grid>
        </Grid>

        {/* <Typography sx={{ fontSize: '14px' }}>выпуск</Typography>
        <Typography sx={{ fontSize: '14px' }}>город</Typography>
        <Typography sx={{ fontSize: '14px' }}>страна</Typography> */}

        {/* <Typography>2021</Typography>
        <Typography>город Томск</Typography>
        <Typography>страна Россия</Typography> */}
        <Typography>факултет Физико-Технический факультет</Typography>
        <Typography>работа НИИПП, старший научный сотрудник </Typography>
        <Typography>email szorina@mail.ru</Typography>
        <Button sx={{ backgroundColor: "#FFB35C", color: "#fff" }}>Статистика по городу</Button>
      </Popup>)}
  </Map>
}

export default App;
