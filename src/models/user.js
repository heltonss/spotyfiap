class User {
  set setUser(user) {
    localStorage.setItem("data", JSON.stringify(user));
  }

  get getUser() {
    return JSON.parse(localStorage.getItem("data"));
  }
}

export default new User();
