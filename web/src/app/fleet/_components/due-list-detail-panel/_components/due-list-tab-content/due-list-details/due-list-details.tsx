interface DueListDetailsProps {
   task: any;
}
export default function DueListDetails({ task }: DueListDetailsProps) {
   return <p className="todo">Additional details go here for {task.name}</p>;
}
