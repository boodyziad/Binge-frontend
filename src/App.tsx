import './App.css';
import BingeList from './components/BingeList';
import Input from './components/Input';

function App() {
  const handleInputChange = (text: string) => {
    console.log(text);
  };

  const handleAutocompleteSelect = (id: number) => {
    console.log(id);
  };

  return (
    <div className='App'>
      <div className='container'>
        <Input
          onChange={handleInputChange}
          onSelectItem={handleAutocompleteSelect}
          autoCompleteItems={[
            {
              id: 1,
              title: "Marvel's Daredevil",
              backdrop_url:
                'https://image.tmdb.org/t/p/original/gLACGQiS8kRP2hDnzdmIYo2uRRc.jpg',
            },
            {
              id: 2,
              title: "Marvel's Jessica Jones",
              backdrop_url:
                'https://image.tmdb.org/t/p/original/fjEOQhzZk2Or7VYUBeMx5ZIwU95.jpg',
            },
            {
              id: 3,
              title: "Marvel's The Defenders",
              backdrop_url:
                'https://image.tmdb.org/t/p/original/n4XLn0wLCxWSFaQgG6queZlFPKi.jpg',
            },
          ]}
        />
        <BingeList
          items={[
            {
              id: 1,
              poster_url:
                'https://image.tmdb.org/t/p/original/QWbPaDxiB6LW2LjASknzYBvjMj.jpg',
            },
            {
              id: 2,
              poster_url:
                'https://image.tmdb.org/t/p/original/1ghmaDw650NuUpGI7mYq6xE2QE2.jpg',
            },
            {
              id: 3,
              poster_url:
                'https://image.tmdb.org/t/p/original/49XzINhH4LFsgz7cx6TOPcHUJUL.jpg',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
