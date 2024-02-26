//arrow function
//ten ham = (doi so truyen vao) =>{
//code
//}
export const fetchApi = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
