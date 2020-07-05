import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "50px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: "#102027",
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12,
  },
 Counter: {
    fontFamily: "Segoe Script"
 },
});
const  Cards = ({data:{ lastUpdate }})=> {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    async function fetchData(){
        setLoading(true)
        const ApiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
        console.log(ApiResponse);
        const data = await ApiResponse.json();
        console.log(data);
        setGlobalData(data);
        setLoading(false);
    }
    fetchData();
}, [])
    if (loading){
        return (
            <div>
            <Grid container spacing={3} justify="center">
            <Grid item component = {Card} className={classes.root}>
            <CardContent>
              <Typography className={classes.title}  gutterBottom>
                Total Infected
              </Typography>
              <Typography variant="h5" component="h2">
              loading...
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {lastUpdate}
              </Typography>
              <Typography variant="body2" component="p">
                Total Active cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>
            <Grid item component = {Card} className={classes.root}>
            <CardContent>
              <Typography className={classes.title}  gutterBottom>
                Recoverd
              </Typography>
              <Typography variant="h5" component="h2">
              loading...
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                REAL DATE
              </Typography>
              <Typography variant="body2" component="p">
                Total Number of Recoveries from COVID-19
              </Typography>
            </CardContent>
          </Grid>
            <Grid item component = {Card} className={classes.root}>
            <CardContent>
              <Typography className={classes.title}  gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
              loading...
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                REAL DATE
              </Typography>
              <Typography variant="body2" component="p">
                Total Number of Deaths cause by COVID-19
              </Typography>
            </CardContent>
          </Grid>
      </Grid>
      </div>
        );

    }
      
  return (
      <div>
      <Grid container spacing={3} justify="center">
      <Grid item component = {Card} className={classes.root}>
      <CardContent>
        <Typography  className={classes.title}  gutterBottom>
          Total Infected
        </Typography>
        <Typography variant="h5" component="h2" className={classes.Counter} style={{color: "#ff9100"}} > 
        <b> 
        <CountUp start={0} end={ globalData && globalData.results && globalData.results[0].total_cases} duration={2} separator=","/>
        </b>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Total cases of COVID-19
        </Typography>
      </CardContent>
    </Grid>
      <Grid item component = {Card} className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
         Total Recoverd
        </Typography>
        <div className={classes.recoverd}>
        <Typography variant="h5" component="h2" className={classes.Counter} style={{color: "#00c853" }}>
            <b>
            <CountUp start={0} end={ globalData && globalData.results && globalData.results[0].total_recovered} duration={2} separator=","/>
           </b>
        </Typography>
        </div>
        <Typography className={classes.pos} color="textSecondary">
        {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Total Number of Recoveries from COVID-19
        </Typography>
      </CardContent>
    </Grid>
      <Grid item component = {Card} className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          Deaths
        </Typography>
        <Typography variant="h5" component="h2" className={classes.Counter} style={{color: "#ff3d00"}} >
            <b>
            <CountUp start={0} end={ globalData && globalData.results && globalData.results[0].total_deaths} duration={2} separator=","/>
            </b>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Total Number of Deaths cause by COVID-19
        </Typography>
      </CardContent>
    </Grid>
</Grid>
</div>
  );
}
export default Cards;