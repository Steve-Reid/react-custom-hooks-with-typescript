import * as React from 'react';

import './Item.css';
import { Nutrition } from '../App';

interface ItemProps {
  key: string;
  item: Nutrition;
  handleRemove: (id: string) => void;
  editable: boolean;
  handleEdit: () => void;
  handleKeyPress: (
    event: React.KeyboardEvent<HTMLInputElement>,
    id: string
  ) => void;
}

export const Item: React.FC<ItemProps> = ({
  item,
  handleRemove,
  editable,
  handleEdit,
  handleKeyPress,
}: ItemProps) => {
  return (
    <div className="item-style">
      {editable ? (
        <input
          type="text"
          defaultValue={item.name}
          onKeyPress={(e): void => handleKeyPress(e, item.id)}
        />
      ) : (
        <p onDoubleClick={handleEdit}>{item.name}</p>
      )}
      <p>{item.calories}</p>
      <button
        className="remove-button"
        onClick={(): void => handleRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};
