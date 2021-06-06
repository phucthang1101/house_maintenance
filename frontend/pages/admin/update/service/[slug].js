import React from 'react'
import AdminLayout from '../../../../components/AdminLayout/AdminLayout';
import Link from 'next/link';
import Admin from '../../../../components/auth/Admin';
import CategoryUpdateComponent from '../../../../components/crud/categoryCRUD/CategoryUpdateComponent';
import ServiceUpdateComponent from '../../../../components/crud/servicesCRUD/ServiceUpdateComponent';

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
                 <ServiceUpdateComponent/>
                </div>
               
              </div>
            </div>
          </Admin>
        </AdminLayout>
      );
}
export default Service;