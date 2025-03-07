import { useState } from 'react';

function getRandomTsCode() {
  const numbers = Array(10).fill().map((_, i) => i + 1);
  const randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
}
