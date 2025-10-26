interface NoDataFoundProps {
   data: any;
   overrideMessage?: string;
   dataNameOnly?: string;
}

export default function NoDataFound({
   data,
   overrideMessage,
   dataNameOnly,
}: NoDataFoundProps) {
   if (!data || data?.length === 0) {
      const msg = overrideMessage || `No ${dataNameOnly || 'data'} found`;
      return <span className="subtle">{msg}</span>;
   } else {
      return null;
   }
}
