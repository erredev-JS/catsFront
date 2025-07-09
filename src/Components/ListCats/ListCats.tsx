import { FC } from "react";
import { ICat } from "../../types/ICat";
import { CardCat } from "../CardCat/CardCat";

interface Props {
  catsArray: ICat[];
}

export const ListCats: FC<Props> = ({ catsArray }) => {
  return <div className="mt-8">
    {catsArray.map((cat) => <CardCat cat={cat}/>)}
  </div>;
};
