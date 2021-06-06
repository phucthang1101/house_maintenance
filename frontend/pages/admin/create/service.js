import React from 'react'
import AdminLayout from '../../../components/AdminLayout/AdminLayout';
import Link from 'next/link';
import Admin from '../../../components/auth/Admin';
import CategoryCreateComponent from '../../../components/crud/categoryCRUD/CategoryCreateComponent';
import ServiceCreateComponent from '../../../components/crud/servicesCRUD/ServiceCreateComponent';

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
                 <ServiceCreateComponent/>
                </div>
               
              </div>
            </div>
          </Admin>
        </AdminLayout>
      );
}
export default Service;