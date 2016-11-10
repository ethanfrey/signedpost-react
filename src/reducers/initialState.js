export default {
  users: [
    {
      id: "abcdefg",
      name: "John",
      posts: 5
    },
    {
      id: "foobarbaz",
      name: "Jane",
      posts: 17
    },
    {
      id: "dingbooms",
      name: "Will",
      posts: 0
    }
  ],
  posts: {
    abcdefg: [
      {
        id: "aaa",
        number: 1,
        title: "First Post",
        content: "Some text here...."
      },
      {
        id: "bbb",
        number: 2,
        title: "Second Post",
        content: "Tell me something!"
      }
    ],
    foobarbaz: [
      {
        id: "ccc",
        number: 1,
        title: "Foo bar bar",
        content: "Boooorrrrinngg!"
      }
    ],
    dingbooms: []
  }
};
