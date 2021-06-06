import React from 'react'
import AdminLayout from '../../../../components/AdminLayout/AdminLayout';
import Link from 'next/link';
import Admin from '../../../../components/auth/Admin';
import CategoryUpdateComponent from '../../../../components/crud/categoryCRUD/CategoryUpdateComponent';

const Category = () => {
    return (
        <AdminLayout>
          <Admin>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12 pt-5'>
                  <h2>Update Category</h2>
                </div>
                <div className="col-md-12">
                 <CategoryUpdateComponent/>
                </div>
               
              </div>
            </div>
          </Admin>
        </AdminLayout>
      );
}
export default Category;