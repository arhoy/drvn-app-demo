import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { Modal, Button } from 'antd';
import { UserContext } from '../../../../../context/user-context';
import { openNotification } from '../../../../../utils/notification/openNotification';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForForm = ({ children }) => {
  // context
  const user = useContext(UserContext);
  const role_type = user['custom:role_type'];

  // state
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    if (role_type !== 'admin') {
      openNotification('Attention', 'Only admin can create this', 4);
      return;
    }
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <Container>
      <Button type="primary" onClick={showModal}>
        Create New Team
      </Button>
      <Modal
        title="Create New Market"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </Container>
  );
};
