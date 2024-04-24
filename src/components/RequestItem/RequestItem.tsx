import React from 'react';
import FriendshipResponse from 'src/model/FriendshipResponse';
import classes from './RequestItem.module.scss';
import Button from '../core/Button/Button';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { frienshipRequests, loggedUser } from '../state/atom';
import { answerRequest } from 'src/services/FrienshipService';
import { RequestStatus } from 'src/model/RequestStatus';

interface RequestItemProps {
  request: FriendshipResponse;
}

const RequestItem: React.FC<RequestItemProps> = ({ request }) => {
  const [requests, setRequests] = useRecoilState(frienshipRequests);
  const [, setUser] = useRecoilState(loggedUser);

  const handleAccept = () => {
    answerRequest(request.id, RequestStatus.ACCEPTED)
      .then(() => {
        toast.success('Frienship accepted!');
        setRequests(requests.filter((currRequest) => currRequest.id !== request.id));
        setUser((prevUser) => ({
          ...prevUser,
          friendsNumber: prevUser.friendsNumber + 1
        }));
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  const handleReject = () => {
    answerRequest(request.id, RequestStatus.REJECTED)
      .then(() => {
        toast.info('Frienship rejected!');
        setRequests(requests.filter((currRequest) => currRequest.id !== request.id));
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  return (
    <div className={`${classes['c-request-item']}`}>
      <div className={`${classes['c-request-item__user-info-container']}`}>
        <img
          src='https://picsum.photos/id/3/200/200'
          className={`${classes['c-request-item__avatar']}`}
        />
        <div className={`${classes['c-request-item__user-info']}`}>
          <h4>{`${request.requester.firstName} ${request.requester.lastName}`}</h4>
          <span>{request.requester.email}</span>
        </div>
      </div>
      <div className={`${classes['c-request-item__container']}`}>
        <div className={`${classes['c-request-item__user-info']}`}>
          <h4>{request.requester.friendsNumber}</h4>
          <span className={`${classes['c-request-item__label']}`}>Friends</span>
        </div>
        <div className={`${classes['c-request-item__button-container']}`}>
          <Button label='ACCEPT' onClick={handleAccept} />
          <Button label='REJECT' onClick={handleReject} />
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
