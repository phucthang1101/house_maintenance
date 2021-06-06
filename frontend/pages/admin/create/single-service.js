import React from 'react'
import AdminLayout from '../../../components/AdminLayout/AdminLayout';
import Admin from '../../../components/auth/Admin';
import SingleServiceCreateComponent from '../../../components/crud/singleServiceCRUD/SingleServiceCreateComponent';

const Service = () => {
    return (
        <AdminLayout>
          <Admin>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12 pt-5'>
                  <h2>Home Maintenance Service</h2>
                </div>
                <div className="col-md-12">
                 <SingleServiceCreateComponent/>
                </div>
               
              </div>
            </div>
          </Admin>
        </AdminLayout>
      );
}
export default Service;