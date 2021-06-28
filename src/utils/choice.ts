/**
 * Handles picking a random number from an array
 */
export const choice = (arr: any) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
