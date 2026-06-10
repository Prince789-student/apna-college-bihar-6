const cleanTitle = (s) => {
  let res = s.replace(/[📘📌✨🔥💡📚🎯]+/g, '').replace(/\"/g, '');
  const firstAlpha = res.search(/[A-Za-z0-9]/);
  if (firstAlpha !== -1) {
    res = res.substring(firstAlpha);
  }
  return res.trim();
};
console.log(cleanTitle('ĐŸ“~ PROGRAMMING FOR PROBLEM SOLVING'));
console.log(cleanTitle('ĐŸ“Š REFERENCES & TEXTBOOKS'));
