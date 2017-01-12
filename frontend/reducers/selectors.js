export const getChannelIndex = channels => (
  Object.keys(channels).map(id => (
    channels[id]
  ))
);
