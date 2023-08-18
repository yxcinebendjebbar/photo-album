import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    vayo : {
        main: '#352F44',
        light: '#B9B4C7',
        dark: '#5C5470',
        contrastText : '#FAF0E6'
    },
    buttons : {
        main: '#4D3C77',
        light: '#A2678A',
        dark: '#3F1D38',
        contrastText : '#FAF0E6'
    }
  },
});


const cards = [1,2,3,4,5,6,7,8,9]


const App = () => {


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='relative' color="vayo">
            <Toolbar>
                <PhotoCamera className=' mr-5'/>
                <Typography variant='h6'>Photo Album</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm" className=' mt-28 bg-white'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen
                    </Typography>
                    <div className=' mt-10'>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='buttons'>See my photos</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='buttons'>Secondary action</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className=' pt-5 pb-5 pr-0 pl-0' maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className=' h-full flex flex-col'>
                            <CardMedia 
                                className=' aspect-video'
                                image='https://source.unsplash.com/random'
                                title='Image title'
                            />
                            <CardContent className=' flex-grow'>
                                <Typography gutterBottom variant='h5'>Heading</Typography>
                                <Typography>This is a media card. You can use this section to describe the content.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='buttons' variant='contained'>View</Button>
                                <Button size='small' color='buttons'>Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                    
                </Grid>
            </Container>
        </main>
        <footer className=' bg-white pt-[50px] pb-[50px] pl-0 pr-0'>
            <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>Something here to give the footer a purpose</Typography>
        </footer>
    </ThemeProvider>
  )
}

export default App