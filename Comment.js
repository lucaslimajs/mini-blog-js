class Comment {
    constructor() {
        this.comments = [];
    }

    addComment(content) {
        this.comments.push(content);
    }
}

module.exports = Comment;
