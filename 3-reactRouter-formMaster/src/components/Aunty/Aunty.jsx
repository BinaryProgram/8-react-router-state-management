import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import ContextMoney from "../MoneyContext/MoneyContext";

const Aunty = () => {
  const [money,setMoney] = useContext(ContextMoney);
  return (
    <div className="rounded-lg flex-1 border-2 border-orange-600 p-2">
      <h2>Aunty</h2>
      <section className="flex justify-center gap-2">
        <Cousin name={'Baron'}></Cousin>
        <Cousin name={'Fusan'}></Cousin>
      </section>
      <section className="mt-2">
        <h3>${money}</h3>
        <button className="btn btn-primary" onClick={() => setMoney(money + 1000) }> Add $1000</button>
      </section>
    </div>
  );
};

export default Aunty;
