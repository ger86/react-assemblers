import {ReactElement} from 'react';

type Props = {
  message: string;
  callback: () => void;
};

function MyMessage({message, callback}: Props): ReactElement {
  return (
    <div>
      <h3>{message}</h3>
      <button onClick={callback}>Púlsame</button>
    </div>
  );
}

export default MyMessage;
