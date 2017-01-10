```js
{

  currentUser: {
    id: 1,
    username: "toasty_is_da_best37"
  },

  forms: {
    splashForm: {errors: []},
    createMessage: {errors: ["body can't be blank"]}
    teamUsers: [1, 4, 63] //used to keep track of selected users to start a team chat with
  },

  users: {
    1: {
      username: "toasty_is_da_best37"
    }
  },

  curChannel: {
    title: "#yeezus-lives",
    ownerId: 1,
    messages: {
      1: {
        authorId: 1,
        body: "i feel like pablo :kanye:"
      }
    }
    users: [ 1, 2, 4, 5, 7, 54 ]
  }

  channels: {
    1: {
      title: "#yeezus-lives",
      ownerId: 1,
      users: [ 1, 2, 4, 5, 7, 54 ] //an array for user_ids for users who have joined the channel
    }
  },

  curDirectMessage: {
    toId: 4,
    fromId: 1,
    messages: {
      1: {
        authorId: 1,
        body: "sup homie"
      }
    }
  }

}
```
