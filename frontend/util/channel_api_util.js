export const fetchIndex = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels'
  })
);

export const fetchChannel = id => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${id}`
  })
);

export const joinChannel = channel_join => (
  $.ajax({
    method: 'POST',
    url: 'api/channel_joins',
    data: { channel_join }
  })
);

export const leaveChannel = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/channel_joins/${id}`
  })
);
