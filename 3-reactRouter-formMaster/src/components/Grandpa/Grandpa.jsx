import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import AssetContext from "../Context/Context";
import ContextMoney from "../MoneyContext/MoneyContext";
import { useState } from "react";

const Grandpa = () => {
  const asset = "$100000";
  const [money,setMoney] = useState(1000);
  return (
    <div className="mx-auto mt-5 w-2/3 rounded-lg border-2 border-orange-600 p-3">
      <h1 className="mb-2">Grandpa</h1>
      <h2 className="mb-2">Net Money - ${money}</h2>
      <ContextMoney.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="gold🪙">
          <section className="flex justify-center gap-3">
            <Father></Father>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </ContextMoney.Provider>
    </div>
  );
};

export default Grandpa;

/*
  ***** steps of using context api *****
  1. create a context and export it.
  2. add provider for the context with a value. Value could be anything.
  3. useContext to access value in the context API
*/
