import { notification } from 'antd';

export const openNotification = (message, description, duration = 0) => {
  const args = {
    message,
    description,
    duration,
  };
  notification.open(args);
};
