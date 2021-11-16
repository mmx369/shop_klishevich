import Head from "next/head";
import { useEffect } from "react";
import { Container, createStyles, makeStyles } from "@material-ui/core";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./nav";
import { IRootState } from "../../redux/reducers";
import { ELoggedIn } from "../../types/ELoggedIn";
import { getSession } from "next-auth/client";
import {
  updateIsLoggedInAC,
  updateUserAC,
} from "../../redux/actions/appActions";
import { initItems } from "../../redux/actions/cartActions";
import BottomAppBar from "./bottomAppBar";

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      marginTop: "5px",
    },
    footer: {
      marginTop: "55px",
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
    },
  })
);

type TProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: TProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentEmail = useSelector(
    (state: IRootState) => state.app.currentEmail
  );
  const currentRole = useSelector((state: IRootState) => state.app.currentRole);
  const isLoggedIn = useSelector((state: IRootState) => state.app.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn === ELoggedIn.Unknown) {
      (async () => {
        const session = await getSession();
        if (session) {
          dispatch(updateIsLoggedInAC(ELoggedIn.True));
          dispatch(
            updateUserAC(
              session.user.name,
              session.user.email,
              session.databaseId as string,
              session.role as string
            )
          );
        } else {
          dispatch(updateIsLoggedInAC(ELoggedIn.False));
          dispatch(updateUserAC(undefined, undefined, undefined, undefined));
        }
      })();
    }
  }, []);

  useEffect(() => {
    dispatch(initItems());
  }, [dispatch]);

  const isCartEmpty = useSelector((state: IRootState) => state.cart) || [];

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Nav
          currentEmail={currentEmail}
          currentRole={currentRole}
          isLoggedIn={isLoggedIn}
          isCartEmpty={isCartEmpty}
        />
      </header>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <div style={{ flexGrow: 1 }}>{children}</div>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Link href="/">
          <a className={classes.link}>
            <strong>Интернет-магазин. Нумизматика и бонистика</strong>
          </a>
        </Link>
        <BottomAppBar />
      </footer>
    </div>
  );
}
