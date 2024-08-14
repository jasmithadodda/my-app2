import React, { useState } from 'react';
import './ReadMore.css'; // Import the CSS file for styling

function Read() {
  const [isExpanded, setIsExpanded] = useState(false);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  const visibleItemsCount = isExpanded ? items.length : 4;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <ul>
        {items.slice(0, visibleItemsCount).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={toggleReadMore}
        className={isExpanded ? 'read-less' : 'read-more'}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default Read;
