export default function AircraftDetails({ aircraft }) {
   return (
      <div>
         <h2>{aircraft.tail_number}</h2>
         <p>Model: {aircraft.model}</p>
         <p>Make: {aircraft.make}</p>
         <p>Year: {aircraft.year}</p>
      </div>
   );
}
