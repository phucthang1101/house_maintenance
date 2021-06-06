import AdminLayout from '../../components/AdminLayout/AdminLayout';
import Link from 'next/link';
import Admin from '../../components/auth/Admin';
import CategoriesListComponent from '../../components/crud/categoryCRUD/categoriesList';
import SingleServicesListComponent from '../../components/crud/singleServiceCRUD/singleServicesList';

const singleServiceAdmin = () => {
  return (
    <AdminLayout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 pt-5'>
              <h2>Home Maintenance Single Service</h2>
            </div>
            <div className="col-md-12">
             <SingleServicesListComponent/>
            </div>
           
          </div>
        </div>
      </Admin>
    </AdminLayout>
  );
};

export default singleServiceAdmin;
