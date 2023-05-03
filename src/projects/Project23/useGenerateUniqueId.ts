export function useGenerateUniqueId() {
  const date = new Date();
  const timestamp = date.getTime(); 
  const random = Math.floor(Math.random() * 10000);
  return `${timestamp}-${random}`;
}