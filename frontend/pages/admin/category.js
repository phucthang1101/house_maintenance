import AdminLayout from '../../components/AdminLayout/AdminLayout';
import Link from 'next/link';
import Admin from '../../components/auth/Admin';
import CategoriesListComponent from '../../components/crud/categoryCRUD/categoriesList';

const CategoryAdmin = () => {
  return (
    <AdminLayout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 pt-5'>
              <h2>Home Maintenance Category</h2>
            </div>
            <div className="col-md-12">
             <CategoriesListComponent/>
            </div>
           
          </div>
        </div>
      </Admin>
    </AdminLayout>
  );
};

export default CategoryAdmin;
