import { FC } from "react";
import { ICat } from "../../types/ICat";
import { CardCat } from "../CardCat/CardCat";

interface Props {
  catsArray: ICat[];
}

export const ListCats: FC<Props> = ({ catsArray }) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 h-[68.8vh] overflow-auto mt-2 lg:mt-8 lg:h-[65vh] justify-items-center">
  {catsArray.map((cat) => (
    <CardCat cat={cat} key={cat.id} />
  ))}
</div>

};
