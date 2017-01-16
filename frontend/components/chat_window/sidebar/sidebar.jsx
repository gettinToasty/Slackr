import React from 'react';
import Modal from 'react-modal';

import ChannelDetail from './channel_detail';

import ChannelIndex from './channel_index';
import ChannelList from './channel_list';

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
        return <ChannelList channels={this.props.allChannels} />;
      } else {
        return <h1>dmList</h1>;
      }
    };

    return (
      <div className='sidebar'>
        <Modal
          isOpen={this.state.openModal}
          contentLabel='Modal'
          onRequestClose={() => this.toggleModal(this.state.modalType)}
          className='modal-content'
          overlayClassName='modal-overlay'>
          {decideModal()}
        </Modal>

        <ChannelDetail
          curChannel={this.props.curChannel}
          currentUser={this.props.currentUser} />

        <h3 onClick={() => this.toggleModal('channelList')}>
          Channels ({this.props.allChannels.length})
        </h3>
        <ChannelIndex
          userChannels={this.props.userChannels}
          updateChannel={this.props.updateChannel} />

        <h3 onClick={() => this.toggleModal('dmList')}>
          Direct Messages
        </h3>
        <UserIndex
          userMessages={this.props.userMessages}
          updateChannel={this.props.updateChannel}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}


export default Sidebar;
