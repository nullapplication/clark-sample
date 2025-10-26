'use client';

import Bases from '@app/_components/bases/bases';
import { Suspense } from 'react';

function InventoryHomepageContent() {
   const handleSelectBase = (id: string) => {
      console.log('Selected base ID:', id);
   };

   return (
      <div className="container">
         <div className="content">
            <h1>Inventory</h1>
            <Bases onSelect={handleSelectBase} />
         </div>
      </div>
   );
}

export default function InventoryHomepage() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <InventoryHomepageContent />
      </Suspense>
   );
}
