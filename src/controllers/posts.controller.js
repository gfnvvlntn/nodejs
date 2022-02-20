class PostsController {
  constructor() {
    this.posts = [
      { id: 1, post: "new post 1" },
      { id: 2, post: "new post 2" },
      { id: 3, post: "new post 3" },
    ];
  }

  getPosts = (req, res) => {
    if (req.params.id) {
      return res.send(this.posts.filter((post) => post.id === +req.params.id));
    }
    res.send(this.posts);
  };

  addPost = (req, res) => {
    const post = req.body;
    this.posts.push(post);
    res.send(this.posts);
  };
}

export default new PostsController();
