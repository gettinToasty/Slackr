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
    this.leaveDm = this.leaveDm.bind(this);
  }

  toggleModal(modalType) {
    this.props.fetchUsers()
      .then(() => this.setState(
        { openModal: !this.state.openModal, modalType }
      ));
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

  leaveDm(dmId) {
    this.props.leaveDm(dmId)
      .then(this.props.fetchDms)
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
          updateChannel={this.props.updateChannel}
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
        <div onClick={() => this.toggleModal('channelList')} className='group'>
          <h3>
            Channels ({this.props.allChannels.length})
          </h3>
          <i className="fa fa-plus-square" aria-hidden="true"></i>
        </div>
        <ChannelIndex
          userChannels={this.props.userChannels}
          updateChannel={this.props.updateChannel}
          leaveChannel={this.leaveChannel} />
        <div onClick={() => this.toggleModal('dmList')} className='group'>
          <h3>
            Direct Messages
          </h3>
          <i className="fa fa-plus-square" aria-hidden="true"></i>
        </div>
        <UserIndex
          userMessages={this.props.userMessages}
          updateChannel={this.props.updateChannel}
          currentUser={this.props.currentUser}
          leaveDm={this.leaveDm} />
      </div>
    );
  }
}


export default Sidebar;
