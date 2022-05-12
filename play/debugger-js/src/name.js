const obj = {
  username: '开发老腰',
  age: 32,
};

function showAuthor(info) {
  return `${info.username}已经 ${info.age} 岁了。`;
}

const res = showAuthor(obj);
console.log(res);
