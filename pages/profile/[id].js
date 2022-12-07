import React from 'react';
import { useRouter } from 'next/router';

function ProfileItem() {
    const router = useRouter();

  return (
    <div>Esta es la página del Perfil: {router.query.id}</div>
  )
}

export default ProfileItem