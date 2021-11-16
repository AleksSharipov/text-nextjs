import React from 'react';

import { Box, Modal, Grid, Typography, CardContent as MuiCardContent, Card as MuiCard } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  card: {
    maxHeight: '290px',
    background: '#FFFFFF',
    boxShadow: '0px 15px 60px rgba(199, 208, 240, 0.25)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '-8px -2px 51px -12px rgba(97,97,97, .3)',
    },
  },
  cardContent: {
    padding: '64px 0 40px 48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }
}));

interface cardContentProps {
  title: string,
  icon: string,
  description?: string
}

const CardContent: React.FC<cardContentProps> = ({ title, icon, description }) => {
  const classes = useStyles();


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {
        description ?
          <Grid
            onClick={handleOpen}
            key={`${title}_${icon}`}
            item xs={10} lg={4} md={5}
          >
            <MuiCard className={classes.card} >
              <MuiCardContent className={classes.cardContent} >
                <Typography variant="h5">{title}</Typography>
                <img src={icon} alt={title} style={{
                  maxWidth: '50px',
                  width: '100%',
                  height: '50px',
                  marginTop: '84px'
                }} />
              </MuiCardContent>
            </MuiCard>
          </Grid> : <Grid key={`${title}_${icon}`} item xs={10} lg={4} md={5}>
            <MuiCard className={classes.card} >
              <MuiCardContent className={classes.cardContent} >
                <Typography variant="h5">{title}</Typography>
                <img src={icon} alt={title} style={{
                  maxWidth: '50px',
                  width: '100%',
                  height: '50px',
                  marginTop: '84px'
                }} />
              </MuiCardContent>
            </MuiCard>
          </Grid>
      }
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400',
            backgroundColor: 'white',
            border: '2px solid #000',
            boxShadow: '24',
            padding: '50px 100px'
          }} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {description}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default CardContent;