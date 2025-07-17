import { FC } from "react";
import { ICat } from "../../types/ICat";
import { CardCat } from "../CardCat/CardCat";

interface Props {
  catsArray: ICat[];
}

export const ListCats: FC<Props> = ({ catsArray }) => {
  return <div className="flex flex-row flex-wrap gap-5 h-[68.8vh] overflow-auto mt-2">
    {catsArray.map((cat) => <CardCat cat={cat} key={cat.id}/>)}
  </div>;
};
