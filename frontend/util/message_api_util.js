export const fetchMessages = (type, id) => (
  $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: {
      postable_type: type,
      postable_id: id
    }
  })
);

export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: { message }
  })
);

export const deleteMessage = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/messages/${id}`
  })
);

export const updateMessage = message => (
  $.ajax({
    method: 'PATCH',
    url: `api/messages/${message.id}`,
    data: { message }
  })
);

export const getGiphy = query => (
  $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/translate?s=${query}&rating=pg-13&api_key=dc6zaTOxFJmzC`
  })
);
