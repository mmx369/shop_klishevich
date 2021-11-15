import {
  Grid,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  createStyles,
  makeStyles,
  Button,
  SelectProps,
} from "@material-ui/core";
import { Formik, Form, Field, useField, useFormikContext } from "formik";
import useSWR from "swr";
import router, { useRouter } from "next/router";
import { Type } from "../../database/getTypes";
import { Country } from "../../database/getCountry";
import { getAsString } from "../../database/getAsString";
import { translateCategory } from "../../lib/translate";
import { translateCountry } from "../../lib/translate";

export interface SearchProps {
  types: Type[];
  countries: Country[];
  singleColumn?: boolean;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      margin: "auto",
      maxWidth: 500,
      padding: theme.spacing(3),
      backgroundColor: "#f9fbe7",
    },
  })
);

const prices = [0, 10, 100, 500, 1000, 5000, 10000];

export default function Search({
  types,
  countries,
  singleColumn,
}: SearchProps) {
  const classes = useStyles();
  const { query } = useRouter();
  const smValue = singleColumn ? 12 : 6;

  const initialValues = {
    type: getAsString(query.type) || "all",
    country: getAsString(query.country) || "all",
    minPrice: getAsString(query.minPrice) || "all",
    maxPrice: getAsString(query.maxPrice) || "all",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        router.push(
          {
            pathname: "/shop",
            query: { ...values, page: 1 },
          },
          undefined,
          { shallow: true }
        );
      }}
    >
      {({ values }) => (
        <Form>
          <Paper elevation={5} className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={smValue}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="search-type">Тип товара</InputLabel>
                  <Field
                    name="type"
                    as={Select}
                    labelId="search-type"
                    label="Type"
                  >
                    <MenuItem value="all">
                      <em>Показать все</em>
                    </MenuItem>

                    {types.map((type) => (
                      <MenuItem key={type.type} value={type.type}>
                        {`${translateCategory(type.type)} (${type.count})`}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={smValue}>
                <CountrySelect
                  type={values.type}
                  name="country"
                  countries={countries}
                />
              </Grid>

              <Grid item xs={12} sm={smValue}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="search-min-price">
                    Минимальная цена
                  </InputLabel>
                  <Field
                    name="minPrice"
                    as={Select}
                    labelId="search-min-price"
                    label="Min price"
                  >
                    <MenuItem value="all">
                      <em>Не выбрано</em>
                    </MenuItem>
                    {prices.map((price) => (
                      <MenuItem key={price} value={price}>
                        {price}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={smValue}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="search-max-price">
                    Максимальная цена
                  </InputLabel>
                  <Field
                    name="maxPrice"
                    as={Select}
                    labelId="search-max-price"
                    label="Max price"
                  >
                    <MenuItem value="all">
                      <em>Не выбрано</em>
                    </MenuItem>
                    {prices.map((price) => (
                      <MenuItem key={price} value={price}>
                        {price}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Искать
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}

export interface CountrySelectProps extends SelectProps {
  name: string;
  countries: Country[];
  type: string;
}

export function CountrySelect({
  countries,
  type,
  ...props
}: CountrySelectProps) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField({
    name: props.name,
  });

  const { data } = useSWR<Country[]>("/api/getcountry?type=" + type, {
    // dedupingInterval: 60000,
    onSuccess: (newValues) => {
      if (!newValues.map((a) => a.country).includes(field.value)) {
        setFieldValue("country", "all");
      }
    },
  });

  const newCountries = data || countries;

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="search-country">Страна</InputLabel>
      <Select
        name="country"
        labelId="search-country"
        label="Country"
        {...field}
        {...props}
      >
        <MenuItem value="all">
          <em>Показать все</em>
        </MenuItem>
        {newCountries.map((country) => (
          <MenuItem key={country.country} value={country.country}>
            {`${translateCountry(country.country)} (${country.count})`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
