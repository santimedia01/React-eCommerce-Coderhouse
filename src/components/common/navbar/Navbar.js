import React from 'react';
import {Link} from 'react-router-dom';

import { AppBar, Toolbar, Button, IconButton, Typography, Menu, MenuItem, makeStyles, /*InputBase,*/ Badge, fade} from '@material-ui/core';
 
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
import ListIcon from '@material-ui/icons/List';
/*
import AccountCircle from '@material-ui/icons/AccountCircle';
*/

import {useCartContext} from '../../../contexts/cartContext';
import {getCategoriesList} from '../../../services/firebase/firestoreService';

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
      width: '22ch',
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
  categoriesContainer: {
    marginLeft: theme.spacing(1.5),
    height: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  categoriesIcon: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
  navBarOffset: theme.mixins.toolbar,
}));

export default function PrimaryAppBar() {
  /** ------------------------------------
   *  DECLARACION DE ESTADOS, LOS HANDLERS DE EVENTOS Y ESTILOS 
   *  ------------------------------------
  */
  const classes = useStyles();
  const {cart} = useCartContext();
  const [categories, setCategories] = React.useState([{ categoryName: "Cargando categorías..."}]);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [categoriesMenuAnchorEl, setCategoriesMenuAnchorEl] = React.useState(null);

  React.useEffect(() => {
    getCategoriesList(setCategories);
  }, []);

  /* MENU PERFIL DE USUARIO 
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };
  */

  const isCategoriesMenuOpen = Boolean(categoriesMenuAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  const handleCategoriesMenuClose = () => {
    setCategoriesMenuAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const handleCategoriesMenuOpen = (event) => {
    setCategoriesMenuAnchorEl(event.currentTarget);
  };

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

  /*
  const renderSearchBox = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase placeholder="Buscar productos..." classes={{root: classes.inputRoot, input: classes.inputInput}} inputProps={{ 'aria-label': 'search' }} />
    </div>
  );
  */

  const renderShoppingCartMenuIcon = (
    <IconButton aria-label="carrito de compras" color="inherit">
      <Badge badgeContent={cart.totalItemQuantity} color="secondary" showZero max={9999}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );

  const renderCategoriesMenu = (
    <Menu
    id='primary-search-account-menu'
    anchorEl={categoriesMenuAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isCategoriesMenuOpen}
    onClose={handleCategoriesMenuClose}
    >
      { 
        categories.map( ({categoryName, categoryNumber}) => (
          <Link key={"link " + categoryNumber} to={`/categorias/${categoryName}`} className={classes.textDecorationNone}>
            <MenuItem key={categoryNumber}>{categoryName}</MenuItem>
          </Link>
        ))
      }
    </Menu>
  );

  const renderCategoriesMenuButton = (
    <Button
      aria-label="menú de categorías disponibles"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      color="inherit"
      className={classes.categoriesContainer}
    >
      <ListIcon className={classes.categoriesIcon} /> <span>Categorías</span>
    </Button>
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
        {/*renderSearchBox*/}
      </MenuItem>
      <MenuItem onClick={handleCategoriesMenuOpen}>
        {renderCategoriesMenuButton}
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
      
      {/* 
      <MenuItem>
        <Button href="#" color="inherit" disableRipple>Iniciar Sesión</Button>
      </MenuItem>
      <MenuItem>
        <Button href="#" color="inherit" disableRipple>Crear Cuenta</Button>
      </MenuItem> 
      */}
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
            {/*renderSearchBox*/} 
            {/* MENU DE PERFIL DE USUARIO {renderProfileUserMenuIcon} */}
            <Link to="/carrito" className={classes.textDecorationNone}>
              {renderShoppingCartMenuIcon}
            </Link>
            {/*             
            <Button href="#" color="inherit">Iniciar Sesión</Button>
            <Button href="#" color="inherit">Crear Cuenta</Button>
            */}
            <div onClick={handleCategoriesMenuOpen}>
              {renderCategoriesMenuButton}
            </div>
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
      {renderCategoriesMenu}
      {/* MENU PERFIL DE USUARIO {renderProfileUserMenu} */}
      <div className={classes.navBarOffset}></div>
    </div>
  );
}
