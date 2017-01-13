import React from 'react';
import Modal from 'react-modal';

import ChannelDetail from './channel_detail';
import ChannelIndex from './channel_index';
import UserIndex from './user_index';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false, modalType: 'channelList' };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modalType) {
    this.setState({ openModal: !this.state.openModal, modalType });
  }

  render() {
    const decideModal = () => {
      if (this.state.modalType === 'channelList') {
        return "x";
      } else {
        return "y";
      }
    };

    const modalStyle = {};

    return (
      <div className='sidebar'>
        <ChannelDetail
          curChannel={this.props.curChannel}
          currentUser={this.props.currentUser} />
        <h3>Channels ({this.props.allChannels.length})</h3>
        <ChannelIndex
          userChannels={this.props.userChannels}
          updateChannel={this.props.updateChannel} />
        <h3>Direct Messages</h3>
        <UserIndex
          userMessages={this.props.userMessages}
          updateChannel={this.props.updateChannel}
          currentUser={this.props.currentUser} />
        <Modal
          isOpen={this.state.openModal}
          contentLabel='Modal'
          onRequestClose={this.toggleModal}
          style={modalStyle}>
          {decideModal()}
        </Modal>
      </div>
    );
  }
}


export default Sidebar;
