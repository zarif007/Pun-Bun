import * as elements from "typed-html";
import IPun from "../types/pun";
import Pun from "./Pun";

const Puns = ({puns}: {puns: IPun[]}) => {
  return (
    <div class="mx-auto px-2">
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
