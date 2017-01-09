##Component Hierarchy

**SplashFormContainer**
  - Nav
    + Hamburger
    + SearchBar (hidden)
  - SplashForm

**ChatWindowContainer**
  - ChatWindow  
    * Nav
      + Hamburger
      + SearchBar
    * Sidebar
      + ChannelDetail
      + ChannelIndex
      + DMIndex
    * ChatElements
      + TextEntry
      + ChatElement

**ChannelListContainer**
  - ChannelList
    * ChannelSearch
    * ChannelListItem

**UserListContainer**
  - UserList
    * UserSearch
    * UserItem

##Routes

| Path | Component |
|------|-----------|
| "/signup" | "SplashFormContainer" |
| "/login" | "SplashFormContainer" |
| "/" | "ChatWindowContainer" |
| "/channels" | "ChannelListContainer" |
| "/users" | "UserListContainer" |
