const Author = require('./Author'); 

const autor1 = new Author('Lucas');


const post1 = autor1.createPost('Aprendendo classes em JavaScript');

post1.addCommentToPost('Muito bom!');
post1.addCommentToPost('Adorei o conteúdo!');

console.log(`Autor: ${post1.author.name}`);
console.log(`Post: ${post1.content}`);
console.log(`Comentários:`, post1.getComments());

console.log('\nPosts do autor:');
console.log(autor1.posts.map(p => p.content));
