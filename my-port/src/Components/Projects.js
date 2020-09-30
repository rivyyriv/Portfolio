import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import '../index.css';
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';






const ProjectsData = [

    {
        name : 'Anywhere-Fitness',
        github : 'https://github.com/BW-Anywhere-Fitness-2',
        desc : 'AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. From Running to Dancing, AnywhereFitness supports it all!',
        photo : "https://www.fix.com/assets/content/19657/functional-training-open-graph.png"

    },
    {
        name : 'Use My Tech Stuff',
        github : 'https://github.com/Build-Week-Use-My-Tech-Stuff-1',
        desc : 'Like AirBnB but for high end electronics. Tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person! Users can set up items they have for rent such as cameras, TVs, Party equipment like speakers/fog machines etc. launched via Heroku.',
        photo : "https://www.adorama.com/alc/wp-content/uploads/2017/08/shutterstock_271356296-1-1024x678.jpg"


    },
    {
        name : 'Surfers Nexus',
        github : 'https://surfersnexus.com/',
        desc : 'Built for the love of surfing! With this website you are able to use an interactive map to pinpoint surf swells all around the world via Windy.com API. launched via WordPress. Designed with with Elementor and custom CSS.',
        photo : "https://30a.com/wp-content/uploads/2018/01/Untitled-design.jpg"


    } ,
    
]

    

const useStyles = makeStyles({
  root: {
    maxWidth: 315,
  },
});

        export default function Project() {

        const classes = useStyles();
        const preventDefault = (event) => event.preventDefault();


        return (

        <Box display="flex"  flexDirection="row" justifyContent="space-around" flexWrap="wrap">

              {ProjectsData.map( e => 

                <Box m={3} >
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={e.photo}
                        title={e.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {e.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {e.desc}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        <a href={e.github} target="_blank">
                          <Button target="_blank" variant="body2">GITHUB</Button>
                        </a>

                    </CardActions>
                    </Card>
                </Box>

                )}
                
            </Box>
        );
     }
 