import { decode } from "html-entities";

const matches = (string) => {
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

export default matches;
