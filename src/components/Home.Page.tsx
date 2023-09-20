import * as elements from "typed-html";
import IPun from "../types/pun";
import Layout from "./Layout";
import Puns from "./Puns";

const HomePage = ({ puns }: { puns: IPun[] }) => {
  return (
    <Layout>
      <div class="flex justify-center space-x-3">
  <input
    id="searchInput"
    name="searchInput"
    placeholder="Search"
    class="w-[30%] px-2 py-2 border-2 border-gray-900 rounded"
  />
  <a
    id="searchButton"
    class="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded"
  >
    Search
  </a>
</div>

      <div class="column">
        <input class="input" name="item_quantity" type="number" />
      </div>

      <img
        src="https://i.ibb.co/gS4CrCt/logo.png"
        class="mx-auto h-72 w-72"
        alt="Logo"
      />
      <div class="flex justify-end my-2">
        <a
          href="/create"
          class="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded"
        >
          Create
        </a>
      </div>
      <Puns puns={puns} />
    </Layout>
  );
};

export default HomePage;
