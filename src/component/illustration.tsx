import React from 'react'
import styled from '@emotion/styled';
import Title from 'component/title';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const UseStyles = makeStyles({
    product: {
}
  });

function Illustration()  {
    const classes = UseStyles();
        return(
            <Root>
                <Title name="illustration" />
                <Caption>
                <Typography component="div" color="textSecondary">
      <Box textAlign="center" letterSpacing={3} fontWeight="fontWeightLight" fontSize="body2.fontSize">
        小学生の頃からイラストを描くことが趣味。現在はハンドメイド作家の戦略の一つとして、<br />
        作品を購入してもらった時に手描きのイラスト付きthank youカードを添えている。
      </Box>
    </Typography>
    </Caption>
    <Grid container spacing={3}>
        <Grid item md={3} sm={6}>
            <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/aki.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/antique.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/red.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/girl.jpg"
                />
            </Card>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item md={3} sm={6}>
            <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/hozuki.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/kamome.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/majo.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/illustration/sakana.jpg"
                />
            </Card>
        </Grid>
        </Grid>
            </Root>
        )
}

const Root = styled('div')({
    paddingTop: '100px',
    backgroundColor: "#F4F3F0",
    paddingBottom: '200px',
    paddingLeft: '10%',
    paddingRight: '10%',
})

const Caption = styled('div')({
    paddingBottom: '80px',
    paddingTop: '80px',
})

export default Illustration;