import * as React from 'react';

import { Nutrition } from '../App';

type Hook = (
  init: Nutrition[]
) => {
  list: Nutrition[];
  removeItem: (id: string | number) => void;
  saveItem: (id: string | number, newValue: string) => void;
};

export const useList: Hook = init => {
  const [list, setList] = React.useState<Nutrition[]>(init);

  return {
    list,
    removeItem(id: string | number): void {
      const filteredList = list.filter(item => item.id !== id);

      setList(filteredList);
    },
    saveItem(id: string | number, newValue: string): void {
      const updatedList = list.map(listItem => {
        if (listItem.id === id) {
          return {
            ...listItem,
            name: newValue,
          };
        }
        return listItem;
      });

      setList(updatedList);
    },
  };
};
