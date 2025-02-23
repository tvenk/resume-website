import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed; /* Fixed position */
  top: 20px; /* Distance from the top */
  right: 20px; /* Distance from the right */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1000; /* Ensure it's above other content */
`;

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? '☀️' : '🌙'}
    </ToggleButton>
  );
}

export default ThemeToggle;
