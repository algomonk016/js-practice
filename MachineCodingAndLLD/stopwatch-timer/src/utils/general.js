export const generateUniqueId = (length = 10) => {
  const Chars = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const SpecialSymbols = ["@", "!", "#", "$", "%", "^", "&", "*", "(", ")", "="];
  
  let uniqueId = "";

  for(let i = 0; i < (length + 1)/2; i++) {
    const random1 = Math.min(
      Math.max(
        Math.floor(Math.random() * Chars.length),
        0
      ),
      Chars.length - 1
    );
    const random2 = Math.min(
      Math.max(
        Math.floor(Math.random() * SpecialSymbols.length),
        0
      ),
      SpecialSymbols.length - 1
    );

    uniqueId = uniqueId + Chars[random1] + SpecialSymbols[random2];
  }


  return uniqueId;
};