##Component Hierarchy

**Root**
  - Nav
    + Hamburger
    + SearchBar (hidden on SplashForm)
  - {children}

**SplashFormContainer**  
  - SplashForm

**ChatWindowContainer**
  - ChatWindow  
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
