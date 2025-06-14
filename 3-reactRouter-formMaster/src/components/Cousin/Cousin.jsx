import React from 'react';
import Special from '../Special/Special';

const Cousin = (props) => {
    const {name,asset} = props;
    return (
      <div className="rounded-lg border-2 border-orange-600 p-3">
        <h2>Cousin</h2>
        <p>{name}</p>
        {asset && <Special asset={asset}></Special>}
      </div>
    );
};

export default Cousin;