import React from 'react';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Top extends React.Component {
    render(){
        return(
            <Root>
                <Sun>
                <SunImg src="sun.png" alt=""/>
                </Sun>
                <Typography component="div" color="textSecondary">
      <Box textAlign="center" letterSpacing={6} fontFamily="Helvetica Neue" fontSize="h5.fontSize">
        Portfolio of AKARI YABANA
      </Box>
    </Typography>
            </Root>
        )
    }
}

const Root = styled('div')({
    paddingTop: 120,
    paddingBottom: 200,
    backgroundColor: "#F4F3F0",
})

const SunImg = styled('img')({
    padding: 30,
    width: '25%',
})

const Sun = styled('div')({
    textAlign: 'center',
})
export default Top;