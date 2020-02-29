const filterList = (arrayList, key) => {
  const filteredList = arrayList.map(item => item[key]);
  const listWithUniqueValue = [...new Set(filteredList)];
  return listWithUniqueValue;
};

export default filterList;