'use client';

import EventLinearCalendar from '@app/_components/event-linear-calendar/event-linear-calendar';
import DueList from '@app/_components/due-list/due-list';
import SearchInput from '@app/_components/ui/search-input/search-input';

interface CalendarDueListProps {
   baseOfOperationId: string | null;
}

export default function CalendarDueList({
   baseOfOperationId,
}: CalendarDueListProps) {
   const onSelect = (date) => {
      console.log(date);
   };

   return (
      <>
         <EventLinearCalendar onSelect={onSelect} />
         <form className="search-form">
            <SearchInput placeholder="Search maintenance" />
         </form>
         <DueList baseOfOperationId={baseOfOperationId} />
      </>
   );
}
