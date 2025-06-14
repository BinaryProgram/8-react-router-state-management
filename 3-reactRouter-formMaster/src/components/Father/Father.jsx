import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className="border-2 flex-1 border-orange-600 p-2 rounded-lg">
            <h2>Father</h2>
            <section className='flex justify-around gap-2'>
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;