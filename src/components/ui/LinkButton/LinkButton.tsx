import { Link } from 'react-router-dom';

const LinkButton = ({ title, to }: { title: string; to: string }) => {
  return <Link to={to}>{title}</Link>;
};

export default LinkButton;
