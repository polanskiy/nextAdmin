import React from 'react';
import dynamic from 'next/dynamic';

const CKEditor = dynamic(() => import('./CKEditor'), {
  ssr: false,
});
const ComponentAttempt = () => (
  <div>
    <CKEditor data="Some Default Data" />
  </div>
);
export default ComponentAttempt;
