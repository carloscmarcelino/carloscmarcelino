export const getInitialLetters = (name: string): string => {
  const [first, last] = name.trim().split(' ');
  return `${first.charAt(0)}${last ? last.charAt(0) : ''}`.toUpperCase();
};
