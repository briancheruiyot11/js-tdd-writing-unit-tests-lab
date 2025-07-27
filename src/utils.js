// Your code here
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }
  if (!/^[A-Za-z]+$/.test(word) && word !== "") {
    throw new Error("Invalid input");
  }
  if (word === "") return false;

  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}
