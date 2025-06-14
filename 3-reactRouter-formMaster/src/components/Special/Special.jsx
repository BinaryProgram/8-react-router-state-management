import React, { useContext } from 'react';
import AssetContext from '../Context/Context';

const Special = (props) => {
  const {asset} = props;
  
  // using context no props drilling 
  const gold = useContext(AssetContext);
    return (
      <div className="rounded-lg border-2 border-orange-600 p-2">
        <h2>Special</h2>
        <h3>{asset}</h3>
        <h3>Also has - {gold}</h3>
      </div>
    );
};

export default Special;