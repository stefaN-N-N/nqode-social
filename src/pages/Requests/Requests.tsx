import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import RequestItem from 'src/components/RequestItem/RequestItem';
import { frienshipRequests, loggedUser } from 'src/components/state/atom';
import { getRequests } from 'src/services/FrienshipService';
import classes from './Requests.module.scss';

const Requests = () => {
  const [user] = useRecoilState(loggedUser);
  const [requests, setRequests] = useRecoilState(frienshipRequests);

  useEffect(() => {
    getRequests(user.id)
      .then((response) => setRequests(response.data))
      .catch(() => toast.error('Something went wrong'));
  }, [setRequests, user.id]);

  if (requests.length === 0) return <h1>No requests</h1>;

  return (
    <div className={`${classes['c-requests']}`}>
      {requests.map((request) => (
        <RequestItem request={request} key={request.id} />
      ))}
    </div>
  );
};

export default Requests;
