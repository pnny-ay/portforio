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

function Handmade()  {
    const classes = UseStyles();
        return(
            <Root>
                <Title name="handmade" />
                <Logo>
                <LogoImg src="hanaya2.png" alt=""/>
                </Logo>
                <Caption>
                <Typography component="div" color="textSecondary">
      <Box textAlign="center" letterSpacing={3} fontWeight="fontWeightLight" fontSize="body2.fontSize">
        刺繍アクセサリー作家「hanaya」として2019年12月よりオンラインで活動。<br />
        20代女性をターゲットに、宣伝はtwitter、販売はminneで行なっている。
      </Box>
    </Typography>
    </Caption>
    <Grid container spacing={3}>
        <Grid item md={3} sm={6}>
            <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/handmade/beads.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/handmade/tori_to_ohana.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="handmade/cat.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="handmade/yellow_white.jpg"
                />
            </Card>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item md={3} sm={6}>
            <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/handmade/icon.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="/handmade/org.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="handmade/dina.jpg"
                />
            </Card>
        </Grid>
        <Grid item md={3} sm={6}>
        <Card className={classes.product}>
                <CardMedia
                component="img"
                image="handmade/fish2.jpg"
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
})
const Papers = styled('div')({
    paddingTop: '80px',
})

const Blue = styled('span')({
    color: '#1697B2',
})

const LogoImg = styled('img')({
    padding: 30,
    width: '25%',
})

const Logo = styled('div')({
    textAlign: 'center',
})
export default Handmade;