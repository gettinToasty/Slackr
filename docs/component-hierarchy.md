##Component Hierarchy

**SplashFormContainer**
  - Nav
  - SplashForm

**ChatWindowContainer**
  - ChatWindow  
    * Nav
    * Sidebar
      + ChannelDetail
      + ChannelIndex
      + DMIndex
    * ChatElements
      + TextEntry
      + ChatElement

**ChannelListContainer**
  - ChannelList
    * ChannelListItem

**UserListContainer**
  - UserList
    * UserItem

##Routes

| Path | Component |
|------|-----------|
| "/signup" | "SplashFormContainer" |
| "/login" | "SplashFormContainer" |
| "/" | "ChatWindowContainer" |
| "/channels" | "ChannelListContainer" |
| "/users" | "UserListContainer" |
