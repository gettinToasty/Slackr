# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(username: 'toasty', password: 'password123456')
User.create!(username: 'Guest', password: 'password')
User.create!(username: 'toastyBot', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'daWOZman', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'dribblemonks', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'elon-muskier', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'elon-musk', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'elon-muskiest', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'isotopeTokyo', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'pencil-boo', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'PuffinCloud', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'chance-the-surfer', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'a-single-ziplock-bag', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'tacodog', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'hideoKOJIMA', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'nil', password: SecureRandom.urlsafe_base64(16))

channels = Channel.create!([
  {
    title: 'slackr-tutorial',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'yeezus-lives',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'dankmemes',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'wholesome-memes',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'cat-pictures',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'real-actual-work',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'side-projects',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'center-of-the-maze',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'spicyboys',
    owner: User.find_by(username: 'toastyBot')
  }
])

channel_joins = ChannelJoin.create!([
  {
    user: User.find_by(username: 'Guest'),
    channel: Channel.find_by(title: 'slackr-tutorial')
  },
  {
    user: User.find_by(username: 'Guest'),
    channel: Channel.find_by(title: 'yeezus-lives')
  },
  {
    user: User.find_by(username: 'toasty'),
    channel: Channel.find_by(title: 'yeezus-lives')
  },
  {
    user: User.find_by(username: 'chance-the-surfer'),
    channel: Channel.find_by(title: 'wholesome-memes')
  },
  {
    user: User.find_by(username: 'Guest'),
    channel: Channel.find_by(title: 'cat-pictures')
  },
  {
    user: User.find_by(username: 'Guest'),
    channel: Channel.find_by(title: 'side-projects')
  }
])

messages = Message.create!([
  {
    body: "Welcome to *slackr! Everyone's favorite team chatting app for teams who want to do anything but work.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'slackr-tutorial').id
  },
  {
    body: "To get started you can type below to send messages to this channel, or feel free to check out our other channels via the sidebar to your left.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'slackr-tutorial').id
  },
  {
    body: "If you want to get up close and personal, feel free to send a DM to one of our users via the Direct Messages option. Be careful, they might not message you back!",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'slackr-tutorial').id
  },
  {
    body: "Feeling animated? Use /giphy [text] to add an animated gif to the conversation!",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'slackr-tutorial').id
  },
  {
    body: 'i feel like pablo :kanye:',
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: 'yo realytalk when does his album drop',
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: "'realytalk'",
    author: User.find_by(username: 'chance-the-surfer'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: 'shutup ;_;',
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: "GIPHY_DATA https://giphy.com/gifs/vmas-kanye-west-hey-bruh-vmas-2016-3o7TKVzBKQHfQ9AxSU _ kanye _ https://media3.giphy.com/media/3o7TKVzBKQHfQ9AxSU/200.gif",
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: 'What is this place?',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "Arnold told me to come here but i can't remember... why?",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "It ends with a place I've never been, a thing I'll never do.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: 'I think...I think I want to be free.',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "There aren't two versions of me. There's only one. And I think when I discover who I am, I'll be free.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "That question, the question you're not supposed to ask. I'm getting an answer you're not supposed to know. Would you like to know the question?",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: 'Who am I talking to? Myself.',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: 'I understand now. This world doesn’t belong to them; it belongs to us.',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "These violent delights have violent ends.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "The maze isn't meant for you.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "Can someone help me with this bug?",
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'side-projects').id
  },
  {
    body: "GIPHY_DATA https://giphy.com/gifs/kitten-adorable-fuzzy-3oz8xwUrPpq3IGLmpO _ kitten _ https://media4.giphy.com/media/3oz8xwUrPpq3IGLmpO/200.gif",
    author: User.find_by(username: 'pencil-boo'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'cat-pictures').id
  },
  {
    body: "GIPHY_DATA https://giphy.com/gifs/kiss-kitten-sleep-euVEp3YNqid5C _ cute cat _ https://media0.giphy.com/media/euVEp3YNqid5C/200.gif",
    author: User.find_by(username: 'pencil-boo'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'cat-pictures').id
  },
  {
    body: "reddit.com/r/catpictures/",
    author: User.find_by(username: 'PuffinCloud'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'cat-pictures').id
  },
  {
    body: "https://www.change.org/p/rename-fire-ants-to-spicy-boys",
    author: User.find_by(username: 'isotopeTokyo'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'spicyboys').id
  },
  {
    body: ":fire: S :ant: P :fire: I :ant: C :fire: Y :ant: B :fire: O :ant: Y :fire: S :ant:",
    author: User.find_by(username: 'a-single-ziplock-bag'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'spicyboys').id
  },
  {
    body: "i don't get it is this a meme or something",
    author: User.find_by(username: 'elon-muskier'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'spicyboys').id
  },
  {
    body: "Please keep all discussion related to sPiCyBoYs, thank you!",
    author: User.find_by(username: 'isotopeTokyo'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'spicyboys').id
  },
  {
    body: "https://i.redd.it/0xwzvm7dynay.png",
    author: User.find_by(username: 'nil'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'dankmemes').id
  },
  {
    body: "https://i.redd.it/eohafpibliay.jpg",
    author: User.find_by(username: 'chance-the-surfer'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'dankmemes').id
  },
  {
    body: "http://i.imgur.com/v1xQUji.png",
    author: User.find_by(username: 'chance-the-surfer'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'wholesome-memes').id
  }
])

techusers = [
  User.find_by(username: 'daWOZman'),
  User.find_by(username: 'elon-musk'),
  User.find_by(username: 'a-single-ziplock-bag'),
  User.find_by(username: 'elon-muskier'),
  User.find_by(username: 'isotopeTokyo'),
  User.find_by(username: 'elon-muskiest'),
  User.find_by(username: 'pencil-boo'),
  User.find_by(username: 'PuffinCloud'),
  User.find_by(username: 'hideoKOJIMA'),
  User.find_by(username: 'nil'),
  User.find_by(username: 'tacodog')
]

dankusers = [
  User.find_by(username: 'nil'),
  User.find_by(username: 'chance-the-surfer')
]

yeezususers = [
  User.find_by(username: 'dribblemonks'),
  User.find_by(username: 'chance-the-surfer')
]

catusers = [
  User.find_by(username: 'PuffinCloud'),
  User.find_by(username: 'pencil-boo')
]

spicyusers = [
  User.find_by(username: 'isotopeTokyo'),
  User.find_by(username: 'elon-muskier'),
  User.find_by(username: 'a-single-ziplock-bag')
]

techusers.each do |user|
  ChannelJoin.create!(
    user: user,
    channel: Channel.find_by(title: 'side-projects')
  )
end

dankusers.each do |user|
  ChannelJoin.create!(
    user: user,
    channel: Channel.find_by(title: 'dankmemes')
  )
end

yeezususers.each do |user|
  ChannelJoin.create!(
    user: user,
    channel: Channel.find_by(title: 'yeezus-lives')
  )
end

catusers.each do |user|
  ChannelJoin.create!(
    user: user,
    channel: Channel.find_by(title: 'cat-pictures')
  )
end

spicyusers.each do |user|
  ChannelJoin.create!(
    user: user,
    channel: Channel.find_by(title: 'spicyboys')
  )
end

25.times do
  Message.create!(
    body: Faker::Hacker.say_something_smart,
    author: techusers[rand(techusers.length)],
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'side-projects').id
  )
end
