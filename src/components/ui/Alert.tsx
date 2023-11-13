import { ReactNode } from 'react';

import './alert.css';

type AlertProps = {
  mode: 'info' | 'warning' | 'error';
  children: ReactNode;
};

const Alert = ({ mode, children }: AlertProps) => {
  if (mode === 'info') {
    return <aside className='alert alert-info'>{children}</aside>;
  }

  if (mode === 'warning') {
    return (
      <aside className='alert alert-warning'>
        <h2>Varning!</h2>
        {children}
      </aside>
    );
  }

  if (mode === 'error') {
    return (
      <aside className='alert alert-error'>
        <h2>Ett fler har inträffat!</h2>
        {children}
      </aside>
    );
  }
};

export default Alert;