import React from 'react'
import styled from '@emotion/styled';
import Title from 'component/title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

function Research() {

        return(
            <Root>
                <Title name="research" />
                <Typography component="div" color="textSecondary">
                    <Name>
      <Box textAlign="center" letterSpacing={3} fontWeight="fontWeightLight" fontSize="h6.fontSize">
        物理ベースコンピュータグラフィクス研究室
      </Box>
      <Box textAlign="center" letterSpacing={3} fontWeight="fontWeightLight" fontSize="h6.fontSize">
        <Blue>P</Blue>hysics-<Blue>B</Blue>ased <Blue>C</Blue>omputer <Blue>G</Blue>raphics Lab.
      </Box>
      </Name>
    </Typography>
    <Grid container spacing={3}>
    <Grid item xs={6}>
    <Card>
    <CardMedia
          src="fire.mp4"
          title="fire"
          component="video"
          height="300"
          autoPlay
          loop
          muted
        />
    <CardContent>
    <Typography component="div" color="textSecondary">
      <Box textAlign="center" letterSpacing={6} fontWeight="fontWeightLight" fontSize="body1.fontSize">
        <Thesis>卒業論文</Thesis>
        </Box>
        <Box textAlign="center" letterSpacing={3} fontWeight="fontWeightLight" fontSize="body2.fontSize">
        <Caption>パッチベース合成による<br />炎のアニメーション</Caption>
        </Box>
    </Typography>
    </CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card>
    <CardMedia
          src="parachute.mp4"
          title="parachute"
          component="video"
          height="300"
          autoPlay
          loop
          muted
        />
    <CardContent>
    <Typography component="div" color="textSecondary">
      <Box textAlign="center" letterSpacing={6} fontWeight="fontWeightLight" fontSize="body1.fontSize">
        <Thesis>修士論文</Thesis>
        </Box>
        <Box textAlign="center" letterSpacing={3} fontWeight="fontWeightLight" fontSize="body2.fontSize">
        <Caption>
        昼花火のシミュレーション(仮)
        </Caption>
        </Box>
    </Typography>
    </CardContent>
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
    minHeight: '42px',
})
const Name = styled('div')({
    padding: '80px',
})

const Blue = styled('span')({
    color: '#1697B2',
})

const Thesis = styled('span')({
    textDecoration: 'underline',
})

export default Research;