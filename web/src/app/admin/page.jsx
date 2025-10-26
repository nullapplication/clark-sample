import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
   return (
      <main>
         <h1>Maintenance MX Admin</h1>
         <ul>
            <li>
               <Link href="/admin/aircraft">Aircraft List</Link>
            </li>
         </ul>
      </main>
   );
}
