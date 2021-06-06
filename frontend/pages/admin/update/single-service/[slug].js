import React from 'react'
import AdminLayout from '../../../../components/AdminLayout/AdminLayout';
import Admin from '../../../../components/auth/Admin';
import SingleServiceUpdateComponent from '../../../../components/crud/singleServiceCRUD/SingleServiceUpdateComponent';

const Service = () => {
    return (
        <AdminLayout>
          <Admin>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12 pt-5'>
                  <h2>Update Category</h2>
                </div>
                <div className="col-md-12">
                 <SingleServiceUpdateComponent/>
                </div>
               
              </div>
            </div>
          </Admin>
        </AdminLayout>
      );
}
export default Service;