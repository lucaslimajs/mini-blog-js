# 📝 Mini Blog em JavaScript

Projeto criado para praticar orientação a objetos com JavaScript. O sistema simula autores que criam posts, e cada post pode receber comentários.

## 📦 Estrutura de Classes

- **Author**
  - Nome do autor
  - Lista de posts
  - Método `createPost(content)`

- **Post**
  - Conteúdo do post
  - Autor do post
  - Comentários (`Comment`)
  - Métodos `addCommentToPost(content)` e `getComments()`

- **Comment**
  - Lista de comentários
  - Método `addComment(content)`

## 📂 Arquivos
- `Author.js` → Contém a classe `Author`, responsável por criar autores e permitir que eles publiquem posts.
  <img width="500" height="500" alt="Post" src="https://github.com/user-attachments/assets/8b3c85a5-e7c2-4bd4-aa6f-ad28be29382c" />
 
- `Post.js` → Contém a classe `Post`, que representa um post e permite adicionar e listar comentários.
  <img width="500" height="500" alt="Author" src="https://github.com/user-attachments/assets/f1241a43-962a-4e53-acdf-2a7165093c7e" />

- `Comment.js` → Contém a classe `Comment`, responsável por armazenar e gerenciar os comentários.
  <img width="500" height="500" alt="Comment" src="https://github.com/user-attachments/assets/3902a282-1406-4702-b021-cbebd2a20dbd" />

- `Index.js` → Arquivo principal que executa o sistema, cria os objetos e exibe os dados no console.
  <img width="500" height="500" alt="Index" src="https://github.com/user-attachments/assets/252d5bb7-7723-4d1b-b52a-38d2caf991bd" />






