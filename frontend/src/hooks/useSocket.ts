import { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface IUseSocketProps {
  room: string;
  endpoint: string;
  onUpdate: (data: any) => void;
  onUsersUpdate: (data: any) => void;
}

const useSocket = ({
  endpoint,
  onUpdate,
  onUsersUpdate,
  room,
}: IUseSocketProps) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  const update = (data: any) => socket?.emit('update', data);

  useEffect(() => {
    const s = io(endpoint, { query: `room=${room}` });

    setSocket(s);

    s.on('update', onUpdate);
    s.on('update-users', onUsersUpdate);

    return () => {
      s.disconnect();
    };
  }, [endpoint]);

  return { socket, update };
};

export default useSocket;
