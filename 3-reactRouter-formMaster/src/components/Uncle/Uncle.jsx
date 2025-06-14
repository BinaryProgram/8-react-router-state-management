import React from "react";
import Cousin from "../Cousin/Cousin";
import Special from "../Special/Special";

const Uncle = (props) => {
  const {asset} = props;
  return (
    <div className="flex-1 rounded-lg border-2 border-orange-600 p-2">
      <h2>Uncle</h2>
      <section className="flex justify-center gap-2">
        <Cousin name={"karen"} asset={asset}></Cousin>
        <Cousin name={"sharen"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
