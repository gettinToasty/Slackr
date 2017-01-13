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

export const getUserMessages = dms => (
  Object.keys(dms).map(id => (
    dms[id]
  ))
);

export const getChannelMessages = (messages) => {
  console.log(messages);
  return (
    Object.keys(messages).map(id => (
      messages[id]
    ))
  );
};
