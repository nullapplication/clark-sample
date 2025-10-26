'use client';

import { useRouter } from 'next/navigation';

export default function Error({ reset }) {
   const router = useRouter();
   return (
      <div>
         <h2>Something went wrong!</h2>
         <div className="error-button-container">
            <button onClick={() => router.back()}>Back</button>
            <button onClick={() => reset()}>Try again</button>
         </div>
      </div>
   );
}
