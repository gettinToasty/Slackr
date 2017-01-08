#Slackr

[Heroku link][heroku]
[Trello link][trello]

[heroku]: https://slackrapp.herokuapp.com/
[trello]: https://trello.com/b/LaSHAumT/slackr

##MVP:

Slackr is a group chat application for people who want to do anything but work, built on a Rails backend and a React/Redux frontend. It also uses the socket.io library to enable live chatting between users. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] Account creation and Guest logins
- [ ] Live chat
- [ ] Channels
- [ ] Direct Message
- [ ] Teams or multi-person DM

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Chat Window (2 days)

**Objective:** Users can switch channels and post and read messages

### Phase 3: Live Chat (2 days)

**Objective:** Allow users to chat with each other in real time

### Phase 4: Channel List (1 day)

**Objective:** Users can search for the channel they're looking for and sort by various criteria

### Phase 5: User List (1 day, W2 Th 6pm)

**objective:** Users can find other specific users and start personal messaging with them

### Phase 6: Team Chat (1 day, W2 F 6pm)

**objective:** Users can select multiple users to start a DM with

### Bonus Features (TBD)
- [ ] Emoji Support
- [ ] Giphy Support
- [ ] Search Messages
