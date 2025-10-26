'use client';

import Bases from '@app/_components/bases/bases';
import { Suspense } from 'react';

function PurchasingHomepageContent() {
   const handleSelectBase = (id: string) => {
      console.log('Selected base ID:', id);
   };

   return (
      <div className="container">
         <div className="content">
            <h1>Purchasing</h1>
            <Bases onSelect={handleSelectBase} />
         </div>
      </div>
   );
}

export default function PurchasingHomepage() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <PurchasingHomepageContent />
      </Suspense>
   );
}
