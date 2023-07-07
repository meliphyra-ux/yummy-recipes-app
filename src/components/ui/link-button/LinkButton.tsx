import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link to={to}>
      <li>{title}</li>
    </Link>
  );
};

export default LinkButton;
