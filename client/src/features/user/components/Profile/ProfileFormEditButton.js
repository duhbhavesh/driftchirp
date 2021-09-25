import React from 'react';

export default function ProfileFormEditButton({
   setIsOpen,
   token,
   dispatch,
   handleEditProfile,
   bio,
   website,
}) {
   const handleEditSubmit = (e) => {
      e.preventDefault();
      dispatch(handleEditProfile({ token, bio, website }));
      setIsOpen(false);
   };

   return (
      <>
         <button
            onClick={(e) => handleEditSubmit(e)}
            className='bg-blue-dark w-24 mt-5 hover:bg-blue-light text-white font-bold py-2 px-2 rounded-full disabled:opacity-50'>
            Save
         </button>
      </>
   );
}
