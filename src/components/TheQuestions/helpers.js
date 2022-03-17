import { decode } from "html-entities";

export const matches = (string) => {
  const matches = string.match(/&.+;/g);
  let newQuestion;
  if (matches) {
    matches.forEach((entity) => {
      newQuestion = string.replaceAll(entity, decode(entity));
    });
  } else {
    newQuestion = string;
  }
  return newQuestion;
};

export function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}



