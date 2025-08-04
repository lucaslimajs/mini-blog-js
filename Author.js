const Post = require('./Post');

class Author {
    constructor(name) {
        this.name = name;
        this.posts = [];
    }

    createPost(content) {
        const newPost = new Post(content, this); 
        this.posts.push(newPost);               
        return newPost;                         
    }
}

module.exports = Author;
