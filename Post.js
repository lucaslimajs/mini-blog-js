const Comment = require('./Comment');

class Post {
    constructor(content, author) {
        this.content = content;
        this.author = author; 
        this.commentSection = new Comment();
    }

    addCommentToPost(commentContent) {
        this.commentSection.addComment(commentContent);
    }

    getComments() {
        return this.commentSection.comments;
    }
}

module.exports = Post;
