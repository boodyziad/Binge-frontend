import { useState } from 'react';
import './App.css';
import BingeList from './components/BingeList';
import BingeTime from './components/BingeTime';
import Input from './components/Input';
import AutoCompleteItem from './models/autoCompleteItem';
import BingeItem from './models/bingeItem';
import SearchItem from './models/searchItem';
import imageService from './services/images';
import tvService from './services/tv';

function App() {
  const [bingeItems, setBingeItems] = useState<BingeItem[]>([]);
  const [autocompleteItems, setAutoCompleteItems] = useState<SearchItem[]>([]);
  const [bingeTime, setBingeTime] = useState(0);

  const handleInputChange = async (text: string) => {
    if (!text) return setAutoCompleteItems([]);
    const movies = await tvService.search(text);
    setAutoCompleteItems(movies);
  };

  const handleAutocompleteSelect = (id: number) => {
    const autocompleteItem = autocompleteItems.find(
      (item) => item.id === id
    ) as SearchItem;
    const newBingeItem = {
      id: autocompleteItem.id,
      poster_url: imageService.getImageUrl(autocompleteItem?.poster_path ?? ''),
    };

    setAutoCompleteItems([]);
    if (!bingeItems.find((item) => item.id === id))
      setBingeItems([...bingeItems, newBingeItem]);
  };

  const handleRemoveBingeItem = (id: number) => {
    setBingeItems(bingeItems.filter((item) => item.id !== id));
  };

  return (
    <div className='App'>
      <div className='container'>
        <BingeTime totalMinutes={bingeTime} />
        <Input
          onChange={handleInputChange}
          onSelectItem={handleAutocompleteSelect}
          autoCompleteItems={autocompleteItems.map<AutoCompleteItem>((item) => {
            return {
              id: item.id,
              title: item.name,
              backdrop_url: imageService.getImageUrl(item.backdrop_path ?? ''),
            };
          })}
        />
        <BingeList items={bingeItems} onRemoveItem={handleRemoveBingeItem} />
      </div>
    </div>
  );
}

export default App;
