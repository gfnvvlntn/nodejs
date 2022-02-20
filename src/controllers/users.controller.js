class UsersController {
  constructor() {
    this.users = [
      { id: 1, name: "Tony" },
      { id: 2, name: "Valy" },
    ];
  }

  getUsers = (req, res) => {
    if (req.params.id) {
      return res.send(this.users.filter((user) => user.id === +req.params.id));
    }
    res.send(this.users);
  };

  addUser = (req, res) => {
    const user = req.body;
    this.users.push(user);
    res.send(this.users);
  };
}

export default new UsersController();
