import * as elements from "typed-html";
import IPun from "../types/pun";
import formateDate from "../utils/formatDate";

const Pun = ({ pun }: { pun: IPun }) => {
  return (
    <div class="mx-auto border-2 border-gray-800 rounded w-full mx-3 my-6 p-4 flex space-x-4">
      <div class="flex flex-col justify-between gap-3">
        <div class="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20"
            height="20"
            class="cursor-pointer"
          >
            <path d="M10 0 L0 20 L20 20 Z" fill="#10b981" />
          </svg>
          <p class="font-semibold">{pun.upVote}</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-semibold">{pun.downVote}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          class="cursor-pointer"
        >
          <path d="M10 20 L0 0 L20 0 Z" fill="#ef4444" />
        </svg></div>
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
