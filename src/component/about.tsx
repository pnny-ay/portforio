import React from 'react'
import styled from '@emotion/styled';
import Title from 'component/title';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function About() {
        return(
            <Root>
                <Title name="about" />
                <Icon>
                <IconImg src="avatar.png" alt="akari yabana"/>
                </Icon>
                <Typography component="div" color="textSecondary">
                    <Name>
      <Box textAlign="center" letterSpacing={3} fontWeight="fontWeightLight" fontSize="h6.fontSize">
        矢花 明莉（やばな あかり）
      </Box>
      </Name>
      <Caption>
      <Box textAlign="center" letterSpacing={2} fontWeight="fontWeightLight" fontSize="body1.fontSize">
        1997年6月25日生まれ / 筑波大学大学院 人間総合科学学術院 人間総合科学研究群 情報学学位プログラム 博士前期課程1年 / ハンドメイド作家 / 音楽と絵と手芸と甘いものが好き
      </Box>
      </Caption>
    </Typography>
            </Root>
        )
}

const Root = styled('div')({
    paddingTop: '10%',
    backgroundColor: "#F4F3F0",
    paddingBottom: '200px',
})

const Icon = styled('div')({
    padding: '80px',
    textAlign: 'center',
})

const IconImg = styled('img')({
    width: '25%',
})

const Name = styled('div')({
    paddingBottom: '80px',
})

const Caption = styled('div')({
    marginLeft: '20%',
    marginRight: '20%',
})

export default About;