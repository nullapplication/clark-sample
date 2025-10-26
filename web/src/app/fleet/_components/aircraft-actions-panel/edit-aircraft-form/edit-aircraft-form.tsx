interface EditAircraftFormProps {
   aircraft: {
      tail_number: string;
   };
}
export default function EditAircraftForm({ aircraft }: EditAircraftFormProps) {
   return (
      <div>
         <p className="todo">
            Edit aircraft form content for {aircraft.tail_number}
         </p>
      </div>
   );
}
