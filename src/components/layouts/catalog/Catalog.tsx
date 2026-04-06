import { FC } from "react";
import { observer } from "mobx-react";

import { catData } from "../../../store/catsStore";

import "./Catalog.scss";

interface Catalog {
  items: catData[] | Record<string, string>;
  renderItem: Function;
}

const Catalog: FC<Catalog> = ({ items, renderItem }) => {
  return (
    <div className="catalog">
      {(items as catData[]).map((item) => renderItem(item))}
    </div>
  );
};

export default observer(Catalog);
