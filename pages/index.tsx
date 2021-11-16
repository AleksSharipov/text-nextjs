import React from 'react';
import axios from 'axios';

import { Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CardContent from '@/components/CardContent';
import MainContainer from '@/components/MainContainer';

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: '1280px',
    width: '100%',
    margin: '50px auto 0',
  }
}));

const fetchData = async () => await
  axios.get('http://localhost:3000/api/hello')
    .then(res => ({
      myCard: res.data.data
    }))
    .catch(err => console.log(`Error: ${err} !!!`))

const Home = ({ myCard }: { myCard: any }) => {
  const classes = useStyles();

  return (
    <MainContainer title={`Home page`}>
      <section className={classes.wrapper} >
        <Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            {
              myCard && myCard.map((card: { title: string; icon: string; }) => {
                return (
                  <CardContent key={`${card.title}_${card.icon}`} title={card.title} icon={card.icon} />
                )
              })
            }
          </Grid>
        </Box>
      </section>
    </MainContainer>
  )
}

export const getStaticProps = async () => {
  const data = await fetchData();

  return {
    props: data,
  }
}

export default Home;

