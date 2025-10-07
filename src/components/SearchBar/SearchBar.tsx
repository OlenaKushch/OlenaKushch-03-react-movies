import React from 'react';
import { useState} from 'react';
import toast from 'react-hot-toast';

import styles from './SearchBar.module.css';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar ({onSubmit}: 
    SearchBarProps){ 
        const [query, setQuery] = useState('');

        const handleSubmit = (e:React.FocusEvent<HTMLFormElement>) => 
        {e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const movie = formData.get('query') as string;

            if (!movie.trim()) { 
                toast.error('Please enter your search query.');
                return;
            }
            onSubmit(movie);
            setQuery('');
     };
    return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            autoComplete="off"
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
    );
    }
    