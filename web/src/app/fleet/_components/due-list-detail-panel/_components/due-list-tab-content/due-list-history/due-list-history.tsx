import NoDataFound from '@app/_components/ui/no-data-found/no-data-found';

export default function DueListHistory() {
   const history = [];

   return (
      <>
         <p className="todo">Maintenance task history goes here</p>
         <NoDataFound data={history} dataNameOnly="audit trail entries" />
      </>
   );
}
