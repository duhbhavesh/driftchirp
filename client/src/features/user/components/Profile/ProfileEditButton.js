import React from 'react';

export default function ProfileEditButton({ handleOpenModal }) {
   return (
      <>
         <button
            onClick={() => handleOpenModal()}
            className='focus:outline-none focus:ring border border-blue-light text-blue-light hover:border-blue-dark font-bold py-2 px-4 rounded-full'>
            Edit Profile
         </button>
      </>
   );
}
