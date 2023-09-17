import * as elements from "typed-html";
import IPun from "../types/pun";
import Pun from "./Pun";

const Puns = ({puns}: {puns: IPun[]}) => {
  return (
    <div class="mx-auto px-2">
      <h1 class="font-bold text-center text-3xl">Puns</h1>
      <div class="">
        {
          puns.map((pun) => {
            return <Pun pun={pun} />
          })
        }
      </div>
    </div>
  );
};

export default Puns;
