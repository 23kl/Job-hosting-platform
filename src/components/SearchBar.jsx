import React from 'react';
import { Search } from 'lucide-react';
import styles from './SearchBar.module.css'; // Import the CSS module

const SearchBar = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <Search className={styles.searchIcon} size={20} />
      <input
        type="text"
        placeholder="Search jobs..."
        className={styles.searchInput} 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
