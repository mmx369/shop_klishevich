import { makeStyles } from "@material-ui/core";
import { TreeView } from "@material-ui/lab";
import router from "next/router";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ArrowRight, Label, Money } from "@material-ui/icons";
import { translateCountry } from "../../lib/translate";
import { StyledTreeItem } from "./StyledTreeItem";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 300,
  },
});

export default function Catalog({ listOfCountries, listOfCountriesCoins }) {
  const classes = useStyles();

  const handleClick = async (type: string, country: string) => {
    router.push(
      {
        pathname: "/shop",
        query: {
          type,
          country,
          page: 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={["1", "2"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText="Каталог" labelIcon={Label}>
        <StyledTreeItem nodeId="2" labelText="Банкноты" labelIcon={Money}>
          <StyledTreeItem
            nodeId="8"
            labelText="Показать все"
            labelIcon={ArrowRight}
            onLabelClick={() => handleClick("Paper Money", "all")}
          />

          {listOfCountries?.map((el, index) => (
            <StyledTreeItem
              key={el.country}
              nodeId={String(index + 10)}
              labelIcon={ArrowRight}
              labelText={`${translateCountry(el.country)}`}
              labelInfo={el.count}
              color="#1a73e8"
              bgColor="#e8f0fe"
              onLabelClick={() => handleClick("Paper Money", el.country)}
            />
          ))}
        </StyledTreeItem>
        <StyledTreeItem nodeId="5" labelText="Монеты" labelIcon={Money}>
          <StyledTreeItem
            nodeId="9"
            labelText="Показать все"
            labelIcon={ArrowRight}
            onLabelClick={() => handleClick("Coins", "all")}
          />
          {listOfCountriesCoins.map((el, index) => (
            <StyledTreeItem
              key={el.country}
              nodeId={String(index + 100)}
              labelText={`${translateCountry(el.country)}`}
              labelIcon={ArrowRight}
              labelInfo={el.count}
              color="#1a73e8"
              bgColor="#e8f0fe"
              onLabelClick={() => handleClick("Coins", el.country)}
            />
          ))}
        </StyledTreeItem>
      </StyledTreeItem>
    </TreeView>
  );
}
