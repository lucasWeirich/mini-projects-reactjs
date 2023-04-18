export default function useNumberToFixed(number: number) {
  if (!Number.isInteger(number))
    return number.toFixed(2);
  else
    return number
}