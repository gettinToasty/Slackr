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
  channels: {
    1: {
      title: "#yeezus-lives",
      owner_id: 1,
      messages: {
        1: {
          author_id: 1,
          postable_id: 1,
          postable_type: 'channel',
          body: "i feel like pablo :kanye:"
        }
      }
    }
  },
  directMessages: {
    1: {
      to_id: 4,
      from_id: 1,
      messages: {
        1: {
          author_id: 1,
          postable_id: 1,
          postable_type: 'direct_message',
          body: "sup homie"
        }
      }
    }
  }
}
```
