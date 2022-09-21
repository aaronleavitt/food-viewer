import React from 'react';
import { Typography,Grid, Button } from '@mui/material';
import {Link} from 'react-router-dom';

const TestGrid = () => {

    return (
        <>
        <Grid container spacing ={2}>
            <Grid Item xs={6} md={2} >I am the search page</Grid>
            <Grid Item xs={6} md={2} >Aaron</Grid>
            <Grid Item xs={6} md={2} >James</Grid>
            <Grid Item xs={6} md={2} >Gym</Grid>
            <Grid Item xs={6} md={2} >I</Grid>
            <Grid Item xs={6} md={2} >Rob</Grid>
        </Grid>

        <Typography>I'm the test Grid</Typography>
        <Button component={Link} to='/search' variant='outlined'>Search</Button>
        </>


    )
    
}
export default TestGrid;