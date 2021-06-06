import AdminLayout from '../components/AdminLayout/AdminLayout';
import SignInComponent from '../components/auth/SignInComponent';

const signin = (props) => {
  return (
    <AdminLayout>
      <h2 className='text-center pt-4 pb-4'>Signin</h2>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <SignInComponent />
        </div>
      </div>
    </AdminLayout>
  );
};

export default signin;
