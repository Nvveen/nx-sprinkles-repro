/* eslint-disable-next-line */
import { sprinkles  } from './sprinkles.css';

export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className={sprinkles({ backgroundColor: 'primary'  })}>
      <h1>Welcome to SharedUi!</h1>
    </div>
  );
}

export default SharedUi;
