import { FC } from "react";
import { ICat } from "../../types/ICat";
import { CardCat } from "../CardCat/CardCat";

interface Props {
  catsArray: ICat[];
}

export const ListCats: FC<Props> = ({ catsArray }) => {
  return <div className="mt-8 flex flex-row flex-wrap gap-5 h-[72.8vh] overflow-auto">
    {catsArray.map((cat) => <CardCat cat={cat} key={cat.id}/>)}
  </div>;
};
