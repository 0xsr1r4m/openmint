export const makeId = (length) => {
  let result = "";

  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const makeNumbers = (number) => {
  const nfts = [];

  for (let i = 1; i <= number; i += 1) {
    nfts.push(i);
  }
  return nfts;
};
