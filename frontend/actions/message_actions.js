import * as MessageUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const removeMessage = message => ({
  type: REMOVE_MESSAGE,
  message
});

export const fetchMessages = (type, id) => dispatch => (
  MessageUtil.fetchMessages(type, id)
    .then(resp => dispatch(receiveMessages(resp)))
);

const parseGiphy = (giphy, searchStr) => {
  if(giphy.data.constructor === Array) {
    return `Giphy couldn't match "${searchStr}" and I'm deeply ashamed :(`;
  } else {
    return (
      `GIPHY_DATA ${giphy.data.url} _ ${searchStr} _ ${giphy.data.images.fixed_height.url}`
    );
  }
};

export const createMessage = message => dispatch => {
  let giphyMessage = message.body.match(/^\/giphy (.*)/);
  if(giphyMessage) {
    let query = giphyMessage[1].replace(/\s+/,'+');
    return MessageUtil.getGiphy(query)
      .then(resp => parseGiphy(resp, giphyMessage[1]))
      .then(body => {
        message.body = body;
        return message;
      })
      .then(parsedMessage => MessageUtil.createMessage(parsedMessage))
      .then(respMessage => dispatch(receiveMessage(respMessage)));
  } else {
    return MessageUtil.createMessage(message)
    .then(resp => dispatch(receiveMessage(resp)));
  }
};

export const updateMessage = message => dispatch => (
  MessageUtil.updateMessage(message)
    .then(resp => dispatch(receiveMessage(resp)))
);

export const deleteMessage = id => dispatch => (
  MessageUtil.deleteMessage(id)
    .then(resp => dispatch(deleteMessage(resp)))
);
