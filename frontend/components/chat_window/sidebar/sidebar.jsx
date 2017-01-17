import React from 'react';
import Modal from 'react-modal';

import ChannelDetail from './channel_detail';

import ChannelIndex from './channel_index';
import ChannelList from './channel_list';

import UserIndex from './user_index';
import UserList from './user_list';

import { fetchChannelJoin } from '../../../util/channel_api_util';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false, modalType: 'channelList' };
    this.toggleModal = this.toggleModal.bind(this);
    this.joinChannel = this.joinChannel.bind(this);
    this.leaveChannel = this.leaveChannel.bind(this);
  }

  toggleModal(modalType) {
    this.setState({ openModal: !this.state.openModal, modalType });
  }

  joinChannel(id) {
    let channelJoin = { channel_id: id };
    this.props.joinChannel(channelJoin)
      .then(this.props.fetchChannels)
      .then(() => this.toggleModal(this.state.modalType));
  }

  leaveChannel(channelId) {
    fetchChannelJoin(this.props.currentUser.id, channelId)
      .then(resp => this.props.leaveChannel(resp.id))
      .then(this.props.fetchChannels)
      .then(() => this.props.updateChannel(this.props.userChannels[0].id, 'Channel'));
  }

  render() {
    const decideModal = () => {
      if (this.state.modalType === 'channelList') {
        return <ChannelList
          channels={this.props.allChannels}
          joinChannel={this.joinChannel} />;
      } else {
        return <UserList
          users={this.props.users}
          createDm={this.props.createDm}
          fetchDms={this.props.fetchDms}
          toggleModal={() => this.toggleModal(this.state.modalType)} />;
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
          updateChannel={this.props.updateChannel}
          leaveChannel={this.leaveChannel} />

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
