import { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface IUseSocketProps {
  endpoint: string;
  onUpdate: (data: any) => void;
}

const useSocket = ({ endpoint, onUpdate }: IUseSocketProps) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  const update = (data: any) => socket?.emit('update', data);

  useEffect(() => {
    const s = io(endpoint);

    setSocket(s);

    s.on('update', onUpdate);

    return () => {
      s.disconnect();
    };
  }, [endpoint]);

  return { socket, update };
};

export default useSocket;
