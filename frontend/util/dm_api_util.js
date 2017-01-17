export const fetchDms = () => (
  $.ajax({
    method: 'GET',
    url: 'api/direct_messages'
  })
);

export const fetchDm = id => (
  $.ajax({
    method: 'GET',
    url: `api/direct_messages/${id}`
  })
);

export const createDm = users => (
  $.ajax({
    method: 'POST',
    url: 'api/direct_messages',
    data: { users }
  })
);
