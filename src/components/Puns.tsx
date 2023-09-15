import * as elements from "typed-html";
import IPun from "../types/pun";

const Puns = ({puns}: {puns: IPun[]}) => {
  return (
    <div>
      {
        puns.map((pun) => {
          return <div>{pun.pun}</div>
        })
      }
    </div>
  );
};

export default Puns;
