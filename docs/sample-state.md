```js
{

  currentUser: {
    id: 1,
    username: "toasty_is_da_best37"
  },

  forms: {
    splashForm: {errors: []},
    createMessage: {errors: ["body can't be blank"]}
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
        timestamp: "less than a minute ago"
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

  directMessages {
    dms: {
      1: {
        to: 'toastyBot',
        from: 'toasty_is_da_best37'
      }
    }
    ids: [1, 2, 3] //array sorted by created_at
  }

}
```
