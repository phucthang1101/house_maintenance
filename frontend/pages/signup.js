import AdminLayout from '../components/AdminLayout/AdminLayout';
import Link from 'next/link';
import SignUpComponent from '../components/auth/SignUpComponent';

const signup = (props) => {
  
  return (
   <AdminLayout>
     
      <h2 className='text-center pt-4 pb-4'>Signup</h2>
       <div className='row'>
         <div className='col-md-6 offset-md-3'>
         <SignUpComponent/>
         </div>
       </div>
    
   </AdminLayout>

  );
};

export default signup;
