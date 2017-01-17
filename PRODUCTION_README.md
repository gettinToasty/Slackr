# \*slackr

[\*slackr](https://slackrapp.herokuapp.com) is a team messaging app for teams who want to do anything but work. It is built on a Rails backend using React and Redux to handle dynamic frontend rendering.

## Features and Implementation

### Demo Account
![Image Description](img/url)

New visitors can easily preview all of \*slackr's functionality without signing up for their own account. Clicking on the Demo button logs a visitor in to a built-in Guest account, leading them to the tutorial channel.

### Live Chat
![Image Description](img/url)

Messages are stored in the database and belong to both an `author` and either a `channel` or a `direct_message`. ActionCable, introduced in Rails v5.0, is used to upgrade a user's connection to a websocket to allow users to send a receive messages in real time.

### Channels
![Image Description](img/url)

Messages are organized primarily through channels, which any user can freely join or leave as they please. Channels can be dynamically searched and filtered through in the Channel Search bar which updates on every keystroke entered into it.

### Direct Messages
![Image Description](img/url)

Users can also message one or more other users using \*slackr's Direct Message feature. Simply select the users you want to message from the list and message away! Add a user you didn't mean to? No worries, with \*slackr it's as simple as clicking on their name below the search bar to make them go away and never speak of them again. With as many users as \*slackr has, searching is a breeze thanks to a similar functionality with its above-described Channel Search.

### Single Page Application

\*slackr is a true single page application with minimal routing to ensure a clean and intuitive user experience. Users will never have to manually enter a URL, and after a user logs in they stay on the same page for the entire duration of their session. This is accomplished using React's virtual DOM which only updates components that have changed based on data in Rails' database.

## Future Development

### Notifications

\*slackr plans to notify users when they have unread messages in a channel they are not currently active in.

### Memes

What's the point of a chat application about goofing off without memes? \*slackr agrees and plans to integrate an API similar to Giphy that will post one of the top memes randomly selected from reddit's me_irl page.
