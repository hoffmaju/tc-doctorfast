import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ls from 'local-storage'

const useStyles = makeStyles(theme =>({
  paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function EndPageView(props) {
	const classes = useStyles();
	let date = ls.get('date')
	
	return (
		<Container component="main" maxWidth="md">
			<Card className={classes.root}>
				<CardContent>
					<Typography align='center' >
						Thank you for participating, Mr. Fallahi! We see you on {date} for your appointment at the MRI.
					</Typography>
					<Grid container spacing={2} justify="center" className={classes.paper}>
					</Grid>
					<div align="center">
						<Button variant="contained" color="primary" style={{float: 'center'}}>
							Close
						</Button>
					</div>
				</CardContent>
			</Card>
		</Container >
	);
}

export default EndPageView;