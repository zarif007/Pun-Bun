import * as elements from "typed-html";
import IPun from "../types/pun";
import formateDate from "../utils/formatDate";

const Pun = ({ pun }: { pun: IPun }) => {
  return (
    <div class="mx-auto border-2 border-gray-800 hover:border-indigo-500 rounded w-full mx-3 my-6 p-4 flex space-x-4 cursor-pointer">
      <div class="flex flex-col justify-between gap-3">
        <UpVote pun={pun} />
        <DownVote pun={pun} />
      </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <p class="font-semibold text-sm">{pun.author}</p>
          <p class="font-semibold text-sm">
            {formateDate(pun.createdAt ?? "")}
          </p>
        </div>
        <p class="font-bold text-lg text-blue-500 pt-4">{pun.pun}</p>
      </div>
    </div>
  );
};

export default Pun;

const UpVote = ({ pun }: { pun: IPun }) => {
  return (
    <div class="flex flex-col items-center">
      <p
        class="text-2xl cursor-pointer"
        hx-post={`/api/v1/pun/upVote/${pun.id}`}
        hx-target={`.upVote-count-${pun.id}`}
      >
        🔥
      </p>
      <p class={`font-semibold upVote-count-${pun.id}`}>{pun.upVote}</p>
    </div>
  );
};

const DownVote = ({ pun }: { pun: IPun }) => {
  return (
    <div class="flex flex-col items-center" id={`${pun.id}`}>
      <p class={`font-semibold downVote-count-${pun.id}`}>{pun.downVote}</p>
      <p
        class="text-2xl cursor-pointer"
        hx-post={`/api/v1/pun/downVote/${pun.id}`}
        hx-target={`.downVote-count-${pun.id}`}
      >
        🤮
      </p>
    </div>
  );
};
