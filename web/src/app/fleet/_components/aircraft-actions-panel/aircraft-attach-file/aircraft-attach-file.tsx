'use client';

interface AircraftAttachFileProps {
   tailNumber: string | null;
}
export default function AircraftAttachFile({
   tailNumber,
}: AircraftAttachFileProps) {
   return (
      <div>
         <p className="todo">
            Need to wire up drag and drop file upload for {tailNumber}
         </p>
         <p>
            Drag and drop any files you would like to attach to this aircraft.
         </p>
      </div>
   );
}
