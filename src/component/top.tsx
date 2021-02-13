import React from 'react';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Top() {
        return(
            <Root>
                <Sun>
                <SunImg src="sun.png" alt=""/>
                </Sun>
                <Typography component="div" color="textSecondary">
      <Box textAlign="center" letterSpacing={6} fontWeight="fontWeightLight" fontSize="h5.fontSize">
        Portfolio of AKARI YABANA
      </Box>
    </Typography>
            </Root>
        )
}

const Root = styled('div')({
    paddingTop: 200,
    paddingBottom: 300,
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