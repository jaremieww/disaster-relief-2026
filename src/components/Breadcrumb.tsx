import {Link, useLocation} from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="breadcrumb">
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <span key={to}>
            <Link to={to}>{value}</Link>
            {index !== pathnames.length - 1 && <span> &gt; </span>}
          </span>
        );
      })}
    </div>
  )
}

export default Breadcrumb
