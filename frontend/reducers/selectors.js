export const getAllChannels = channels => (
  Object.keys(channels).map(id => (
    channels[id]
  ))
);

export const getUserChannels = (channels, user) => (
  Object.keys(channels).map(id => (
    channels[id]
  )).filter(channel => (
    channel.users.includes(user)
  ))
);
