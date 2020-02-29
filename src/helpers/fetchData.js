import localData from '../data/data.json';
const fetchData = async () => {
  const fetchDataPromise = new Promise( (resolve, reject) => {
    if (localData){
      resolve(localData);
    } else {
      reject('Failed to fetch data!');
    }
  })
  .catch(error => {
    console.log(error);
  });

  return await fetchDataPromise ?? [];
};

export default fetchData;
