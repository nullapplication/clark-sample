import styles from './search-input.module.css';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
   value?: string;
   placeholder?: string;
}

export default function SearchInput({
   value,
   placeholder = 'Search',
}: SearchInputProps) {
   return (
      <div className={styles.main}>
         <div className={styles.inputWrapper}>
            <input
               type="search"
               defaultValue={value}
               placeholder={placeholder}
               className={styles.search}
            />
            <SearchIcon className={styles.icon} />
         </div>
      </div>
   );
}
