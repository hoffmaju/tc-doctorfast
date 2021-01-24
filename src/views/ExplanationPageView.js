import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Document, Page, pdfjs  } from 'react-pdf';
import ReactPlayer from 'react-player//youtube';
import ls from 'local-storage'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//import infoExplanation from '../../What is an Anterior Cruciate Ligament tear.pdf'

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
  form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
}));

function ExplanationPageView(props) {
	const classes = useStyles();
	const infoName = ls.get('infoName');
	const infoExplanation = ls.get('infoExplanation');
	const infoExplanationVideo = ls.get('infoExplanationVideo');
	
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	  }
	  
	function showAlPages() {
		
	}
	
	return (
		<Container component="main" maxWidth="md">
			<div>
				<Typography align='center' component="h1" variant="h5">
					Information Sheet {infoName}
				</Typography>
			</div>
			<Card className={classes.root}>
				<CardContent>
					<Typography align='left' variant="subtitle1">
						Please read carefully through the following text. Then click on "Done".
					</Typography>
					<div align="center">
						<Document file={infoExplanation} onLoadSuccess={onDocumentLoadSuccess}>
							{Array.from(
								new Array(numPages),
								(el, index) => (
								  <Page
									key={`page_${index + 1}`}
									pageNumber={index + 1}
								  />
								),
							  )}
						</Document>
					</div>
				</CardContent>
			</Card>
			<div>
				<Typography align='center' component="h1" variant="h5" >
					Information Video on {infoName}
				</Typography>
			</div>
			<Card className={classes.root}>
				<CardContent>
					<Grid container spacing={2} justify="center" className={classes.paper}>
						<Typography align='left' variant="subtitle1">
							Please watch carefully  the following video on {infoName}. Then click on "Continue".
						</Typography>
						<div align="center">
							<ReactPlayer url={infoExplanationVideo}
							  />
						</div>
						<div align="center">
							<Button variant="contained" color="primary" style={{float: 'center', marginTop: '21px'}} to={'/confirmation'} component={Link}>
								Done
							</Button>
						</div>
					</Grid>
					<Button variant="contained" color="primary" style={{float: 'left', marginTop: '21px' }} to={'/'} component={Link}>
						Back
					</Button>
				</CardContent>
			</Card>
		</Container >
	);
}

export default ExplanationPageView;