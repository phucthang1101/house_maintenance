import AdminLayout from '../../components/AdminLayout/AdminLayout';
import Link from 'next/link';
import Admin from '../../components/auth/Admin';

const AdminIndex = () => {
  return (
    <AdminLayout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 pt-5 pb-5'>
              <h2>Admin Dashboard</h2>
            </div>
            <div className='col-md-4'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link href='/admin/category'>
                    <a>Category</a>
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/admin/service'>
                    <a>Service</a>
                  </Link>
                </li>
                <li className='list-group-item'>
                  <Link href='/admin/single-service'>
                    <a>Single Service</a>
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </Admin>
    </AdminLayout>
  );
};

export default AdminIndex;
