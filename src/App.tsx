import * as React from 'react';

import './App.css';
import { Item } from './components/Item';
import { useList } from './hooks/useList';

export type Nutrition = {
  id: string;
  name: string;
  calories: number;
};

interface AppProps {}

const grocery: Nutrition[] = [
  { id: '001', name: 'tomato', calories: 17 },
  { id: '002', name: 'rice', calories: 216 },
  { id: '003', name: 'candy bar', calories: 522 },
];

export const App: React.FC<AppProps> = () => {
  const items = useList(grocery);
  const [editable, setEditable] = React.useState(false);

  const handleRemove = (id: string): void => {
    items.removeItem(id);
  };

  const handleEditable = (): void => {
    setEditable(true);
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: string
  ): void => {
    console.log(e);

    if (e.key === 'Enter') {
      setEditable(false);
      items.saveItem(id, e.currentTarget.value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {items.list.map(item => {
          return (
            <Item
              key={item.id}
              item={item}
              handleRemove={handleRemove}
              editable={editable}
              handleEdit={handleEditable}
              handleKeyPress={handleKeyPress}
            />
          );
        })}
      </header>
    </div>
  );
};
