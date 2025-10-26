'use client';

import NoDataFound from '../ui/no-data-found/no-data-found';

interface WorkOrderLineItemTableProps {
   lineItems: {
      id: string;
      description: string;
      estimated_hours: number;
      actual_hours: number;
      labor_cost: number;
      parts_cost: number;
      total_cost: number;
   }[];
}
export default function WorkOrderLineItemTable({
   lineItems,
}: WorkOrderLineItemTableProps) {
   return (
      <>
         {lineItems && lineItems.length > 0 && (
            <table className="table">
               <thead>
                  <tr>
                     <th>&nbsp;</th>
                     <th>Description</th>
                     <th>Est. Hours</th>
                     <th>Actual Hours</th>
                     <th>Labor Cost</th>
                     <th>Parts Cost</th>
                     <th>Total Cost</th>
                  </tr>
               </thead>
               <tbody>
                  {lineItems?.map((item, idx) => (
                     <tr key={item.id}>
                        <td>{idx + 1}</td>
                        <td>{item.description} </td>
                        <td>{item.estimated_hours}</td>
                        <td>{item.actual_hours}</td>
                        <td>{item.labor_cost}</td>
                        <td>{item.parts_cost}</td>
                        <td>{item.total_cost}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}

         <NoDataFound data={lineItems} dataNameOnly="line items" />
      </>
   );
}
