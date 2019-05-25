/* Utils functions */

export const gotClassNames = (title, baseClass) =>
  ({
    Lannister: `${baseClass}--lannister`,
    Stark: `${baseClass}--stark`,
    Tyrell: `${baseClass}--tyrell`,
    Arryn: `${baseClass}--arryn`,
    Targaryen: `${baseClass}--targaryen`,
    Baratheon: `${baseClass}--baratheon`,
    Greyjoy: `${baseClass}--greyjoy`,
    Martell: `${baseClass}--martell`
  }[title] || "");
