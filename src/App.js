import { getPosts, getUsers } from './api/axios'; // Importing getUsers
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ListPage from './ListPage';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]); // State for users
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json);
      setSearchResults(json);
    });
    getUsers().then(json => {
      setUsers(json); // Set users state with the fetched data
    });
  }, []);

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} users={users} /> {/* Pass users as prop */}
    </>
  );
}

export default App;
