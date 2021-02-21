import React from "react";
import styled from "@emotion/styled";
import Top from "component/top";
import About from "component/about";
import Research from "component/research";
import Engineering from "component/engineering";
import Handmade from "component/handmade";
import Illustration from "component/illustration";
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme: Theme) =>
  createStyles({
    sp: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    pc: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      }
    },
    item: {
      letterSpacing: 2,
      fontFamily: "Segoe UI",
      fontSize: 14,
    },
    spitem: {
      color: '#707070',
      letterSpacing: 1,
      fontFamily: "Segoe UI",
      fontSize: 14,
    }
  }),
);


function App() {
  const classes = UseStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <SmartHeader className={classes.sp}>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
      <Icon fontSize="large"/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.spitem} component="a" href="">top</MenuItem>
        <MenuItem className={classes.spitem} component="a" href="#about">about</MenuItem>
        <MenuItem className={classes.spitem} component="a" href="#research">research</MenuItem>
        <MenuItem className={classes.spitem} component="a" href="#engineering">engineering</MenuItem>
        <MenuItem className={classes.spitem} component="a" href="#handmade">handmade</MenuItem>
        <MenuItem className={classes.spitem} component="a" href="#illustration">illustration</MenuItem>
      </Menu>
      </SmartHeader>
      <Header className={classes.pc}>
        {/* <Box letterSpacing={2} fontFamily="Segoe UI" fontSize="overline.fontSize"> */}
        <Box className={classes.item}>

        <Item href="">top</Item>
        <Item href="#about">about</Item>
        <Item href="#research">research</Item>
        <Item href="#engineering">engineering</Item>
        <Item href="#handmade">handmade</Item>
        <Item href="#illustration">illustration</Item>
        </Box>
      </Header>
      <div id="top"><Top /></div>
      <div id="about"><About /></div>
      <div id="research"><Research /></div>
      <div id="engineering"><Engineering /></div>
      <div id="handmade"><Handmade /></div>
      <div id="illustration"><Illustration /></div>
    </Root>
  );
}

const Root = styled('div')({
  backgroundColor: "#F4F3F0",
})

const Item = styled('a')({
  padding: '10px',
  color: '#b3b3b3',
  textDecoration: 'none',
  '&:hover': {
    color: '#707070',
  },
})

const Header = styled('div')({
  float: 'right',
  position: 'fixed',
  top: '20px',
  right: '20px',
})

const SmartHeader = styled('div')({
  float: 'right',
  position: 'fixed',
  top: '20px',
  right: '20px',
})

export default App;
