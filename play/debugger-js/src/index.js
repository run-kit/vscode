const obj = {
  username: '老腰',
  age: 32,
};

function showAuthor(info) {
  return `${info.username}已经 ${info.age} 岁了。`;
}

const res = showAuthor(obj);
console.log(res);
