import React from 'react';
import {Link} from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles, Button, InputBase, Badge, fade } from '@material-ui/core';
 
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
/*
import AccountCircle from '@material-ui/icons/AccountCircle';
*/

const useStyles = makeStyles((theme) => ({
  textDecorationNoneDFlex:{
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
  },
  textDecorationNone:{
    textDecoration: 'none',
    color: 'inherit',
  },
  grow: {
    flexGrow: 1,
  },
  brandLogo: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    maxHeight: '39px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1.4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.only('sm')]: {
      marginLeft: '-30px',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.5, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.only('sm')]: {
      paddingLeft: '1em',
    },
    [theme.breakpoints.up('md')]: {
      width: '17ch',
      '&:focus': {
        width: '28ch',
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobileMenuTrigger: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navBarOffset: theme.mixins.toolbar,
}));

export default function PrimaryAppBar() {
  /** ------------------------------------
   *  DECLARACION DE ESTADOS, LOS HANDLERS DE EVENTOS Y ESTILOS 
   *  ------------------------------------
  */
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  /* MENU PERFIL DE USUARIO 
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);
  */

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  /* MENU PERFIL DE USUARIO
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);
  

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };
  */

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  /** ------------------------------------
   *  RENDERS DE SECCIONES
   *  ------------------------------------
  */
  
  /* MENU PERFIL DE USUARIO 
  const renderProfileUserMenu = (
    <Menu
      id='primary-search-account-menu'
      anchorEl={profileMenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>Mi cuenta</MenuItem>
    </Menu>
  );
  const renderProfileUserMenuIcon = (
    <IconButton
      aria-label="cuenta del usuario actual"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
  */

  const renderSearchBox = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase placeholder="Buscar productos..." classes={{root: classes.inputRoot, input: classes.inputInput}} inputProps={{ 'aria-label': 'search' }} />
    </div>
  );

  const renderShoppingCartMenuIcon = (
    <IconButton aria-label="carrito de compras" color="inherit">
      <Badge badgeContent={0} color="secondary" showZero>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu-mobile'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {renderSearchBox}
      </MenuItem>
      <hr />
      {/* MENU PERFIL DE USUARIO
      <MenuItem onClick={handleProfileMenuOpen}>
        {renderProfileUserMenuIcon}
        <p>Perfil</p>
      </MenuItem>
      */}
      <Link to="/carrito" className={classes.textDecorationNone}>
        <MenuItem>
          {renderShoppingCartMenuIcon}
          <p>Carrito</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <Button href="#" color="inherit" disableRipple>Iniciar Sesión</Button>
      </MenuItem>
      <MenuItem>
        <Button href="#" color="inherit" disableRipple>Crear Cuenta</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <Link to="/" className={classes.textDecorationNoneDFlex}>
            <StoreIcon className={classes.brandLogo} />
            <Typography variant="h6" noWrap>Material E-Commerce</Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {renderSearchBox} 
            {/* MENU DE PERFIL DE USUARIO {renderProfileUserMenuIcon} */}
            <Link to="/carrito" className={classes.textDecorationNone}>
              {renderShoppingCartMenuIcon}
            </Link>
            <Button href="#" color="inherit">Iniciar Sesión</Button>
            <Button href="#" color="inherit">Crear Cuenta</Button>
          </div>
          <div className={classes.sectionMobileMenuTrigger}>
            <IconButton
              aria-label="ver más"
              aria-controls='primary-search-account-menu-mobile'
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* MENU PERFIL DE USUARIO {renderProfileUserMenu} */}
      <div className={classes.navBarOffset}></div>
    </div>
  );
}