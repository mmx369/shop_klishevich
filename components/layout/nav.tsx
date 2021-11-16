import {
  AppBar,
  Container,
  createStyles,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import Link from "next/link";
import { ELoggedIn } from "../../types/ELoggedIn";
import SignInButtons from "../auth/sign_in_button";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import ContactsIcon from "@material-ui/icons/Contacts";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { ERole } from "../../types/ERole";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: "transparent",
      boxShadow: "none",
    },
    link: {
      color: "inherit",
      textDecoration: "none",
    },
    list: {
      width: 250,
      backgroundColor: "#f9fbe7",
      height: "100%",
    },
  })
);

type TProps = {
  currentEmail: string | undefined;
  currentRole: string;
  isLoggedIn: any;
  isCartEmpty: any;
};

export function Nav({
  currentEmail,
  currentRole,
  isLoggedIn,
  isCartEmpty,
}: TProps) {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/shop/cart");
  };

  type Anchor = "left";

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <a className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Главная" />
            </ListItem>
          </a>
        </Link>
        <Link href="/paymentandshipping">
          <a className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Оплата и доставка" />
            </ListItem>
          </a>
        </Link>
        <Link href="/faq">
          <a className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary="Вопросы и ответы" />
            </ListItem>
          </a>
        </Link>
      </List>

      <Divider />
      <List>
        <Link href="/contacts">
          <a className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Контакты" />
            </ListItem>
          </a>
        </Link>
      </List>
      <Divider />
      {currentRole === ERole.Admin && (
        <Link href="/admin">
          <a className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Администрирование" />
            </ListItem>
          </a>
        </Link>
      )}
    </div>
  );

  return (
    <>
      <AppBar
        position="static"
        className={classes.appBar}
        // style={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="lg">
          <Toolbar variant="dense" className={classes.root}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("left", true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="subtitle2" className={classes.root}>
              <Link href="/">
                <a className={classes.link}>Нумизматика и бонистика</a>
              </Link>
            </Typography>
            <Hidden xsDown>
              {isLoggedIn === ELoggedIn.True && (
                <div>Вы вошли как {currentEmail}</div>
              )}
            </Hidden>
            {!!isCartEmpty.length && (
              <div>
                <IconButton color="inherit" onClick={handleClick}>
                  <ShoppingCartRoundedIcon />
                </IconButton>
              </div>
            )}
            {isLoggedIn !== ELoggedIn.Unknown && (
              <SignInButtons isSignedIn={isLoggedIn === ELoggedIn.True} />
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
}
