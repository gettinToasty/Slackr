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

export const createMessage = message => dispatch => (
  MessageUtil.createMessage(message)
    .then(resp => dispatch(receiveMessage(resp)))
);

export const updateMessage = message => dispatch => (
  MessageUtil.updateMessage(message)
    .then(resp => dispatch(receiveMessage(resp)))
);

export const deleteMessage = id => dispatch => (
  MessageUtil.deleteMessage(id)
    .then(resp => dispatch(deleteMessage(resp)))
);
