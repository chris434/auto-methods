export function fileReader(file:File){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    console.log(file)
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}