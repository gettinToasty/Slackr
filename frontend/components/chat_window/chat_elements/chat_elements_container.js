import { connect } from 'react-redux';
import ChatElements from './chat_elements';
import {
  createMessage,
  updateMessage,
  deleteMessage
} from '../../../actions/message_actions';
import { getChannelMessages } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  curChannel: state.curChannel,
  messages: getChannelMessages(state.curChannel.messages)
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  updateMessage: message => dispatch(updateMessage(message)),
  deleteMessage: id => dispatch(deleteMessage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatElements);
