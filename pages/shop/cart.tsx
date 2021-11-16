import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { CartEmpty } from "../../components/shop/CartEmpty";
import { CartTable } from "../../components/shop/CartTable";
import { initItems } from "../../redux/actions/cartActions";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { Grid } from "@material-ui/core";
import Layout from "../../components/layout/layout";

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  button: {
    borderRadius: 13,
    boxShadow: "0 3px 2px 2px",
    padding: "0 10px",
    margin: 10,
  },
});

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(initItems());
  }, [dispatch]);

  let isCartEmpty;

  if (typeof window !== "undefined") {
    isCartEmpty = !window.localStorage.getItem("cart");
  }

  const handleClearCart = () => {
    window.localStorage.removeItem("cart");
    router.reload();
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/checkout");
  };

  const handleGoShopping = () => {
    router.back();
  };

  return (
    <>
      <Layout title="Корзина">
        <div className={classes.root}>
          <Grid container>
            <Grid item>{isCartEmpty && <CartEmpty />}</Grid>
            <Grid item>{isCartEmpty || <CartTable />}</Grid>
            <Grid container item>
              {isCartEmpty || (
                <div>
                  <Grid item xs={12}>
                    <Button
                      className={classes.button}
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleClearCart()}
                      fullWidth
                    >
                      Очистить корзину
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className={classes.button}
                      variant="outlined"
                      color="secondary"
                      onClick={handleClick}
                      fullWidth
                    >
                      Оформить
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className={classes.button}
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={() => handleGoShopping()}
                    >
                      Продожить покупки
                    </Button>
                  </Grid>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
}
