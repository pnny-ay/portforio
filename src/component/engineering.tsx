import React from 'react'
import styled from '@emotion/styled';
import Title from 'component/title';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const UseStyles = makeStyles({
    paper: {
      padding: '20px',
      marginBottom: '20px',
    },
  });

function Engineering()  {
    const classes = UseStyles();
        return(
            <Root>
                <Title name="engineering" />
                <Papers>
                <Paper className={classes.paper}>
                <Typography component="div" color="textSecondary">
      <Box letterSpacing={3} fontWeight="fontWeightLight" fontSize="body1.fontSize">
      <Blue>webエンジニアインターンシップ</Blue>
      </Box>
      <Box letterSpacing={1} fontWeight="fontWeightLight" fontSize="body2.fontSize">
          2020/10~ <Link href="https://kaizenplatform.com/">Kaizen Platform株式会社</Link> (Ruby on Rails / React / Typescript)<br />
          動画制作プラットフォーム「Kaizen Ad」の改修など。FE/BE両方を経験。
      </Box>
    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                <Typography component="div" color="textSecondary">
      <Box letterSpacing={3} fontWeight="fontWeightLight" fontSize="body1.fontSize">
      <Blue>HTML/CSSコーディングアルバイト</Blue>
      </Box>
      <Box letterSpacing={1} fontWeight="fontWeightLight" fontSize="body2.fontSize">
          2020/8~ <Link href="https://www.science-web.co.jp/">サイエンスウェブ株式会社</Link> (HTML / CSS / Wordpress, modx(CMS))<br />
          主に大学、研究機関向けwebページの制作手伝い。
      </Box>
    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                <Typography component="div" color="textSecondary">
      <Box letterSpacing={3} fontWeight="fontWeightLight" fontSize="body1.fontSize">
      <Blue>個人作品</Blue>
      </Box>
      <Box letterSpacing={1} fontWeight="fontWeightLight" fontSize="body2.fontSize">
          2020/6 刺繍糸管理アプリケーション (Ruby on Rails / MySQL / heroku)<br />
          2021/2 ポートフォリオサイト (React / Typescript / heroku)
      </Box>
    </Typography>
                </Paper>
                </Papers>
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

const Papers = styled('div')({
    paddingTop: '80px',
})

const Blue = styled('span')({
    color: '#1697B2',
})

export default Engineering;