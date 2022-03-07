import React from 'react';
import Map, { FullscreenControl, Marker, Popup } from 'react-map-gl';
import { Typography, Button, Grid } from '@mui/material';
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
      <Popup longitude={84.94753445606905} latitude={56.46955924473702}
        anchor="bottom"
        onClose={() => setShowPopup(false)}
        maxWidth="400px"
      >
        <Grid
          container
          columns={12}
          sx={{ fontSize: '14px', color: '#fff', textAlign: 'center' }}
          spacing={2}
        >
          <Grid item>
            <Typography sx={{ fontSize: '24px' }} variant="h5">
              Зорина Алина
              Александровна
            </Typography>
          </Grid>
          <Grid
            item
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400', fontStyle: 'normal' }} >выпуск</Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400', fontStyle: 'normal' }}>город</Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400', fontStyle: 'normal' }} >страна</Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography sx={{ fontWeight: '500', fontStyle: 'normal' }}>2021</Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4} >
              <Typography sx={{ fontWeight: '500', fontStyle: 'normal' }}>Клининград</Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Typography sx={{ fontWeight: '500', fontStyle: 'normal' }} >Россия</Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={1}>

            <Grid xs={12} item>
              <Grid item>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400', fontStyle: 'normal' }}>факультет</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'normal' }} >Физико-Технический факультет</Typography>
              </Grid>
            </Grid>

            <Grid xs={12} item>
              <Grid item>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400', fontStyle: 'normal' }}>работа</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'normal' }} >НИИПП, старший научный сотрудник </Typography>
              </Grid>
            </Grid>

            <Grid xs={12} item>
              <Grid item>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400', fontStyle: 'normal' }}>email</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'normal' }}>szorina@mail.ru</Typography>
              </Grid>
            </Grid>

            <Grid xs={12} item>
              <Grid item>
                <Button sx={{ mt: 2 }} variant="contained">Статистика по городу</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Popup>)
    }

  </Map >

}

export default App;
