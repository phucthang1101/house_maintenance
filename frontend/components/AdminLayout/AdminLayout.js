import Header from '../header/Header';
import Footer from '../footer/footer';
import LoadingScreen from '../loadingScreen/loadingScreen';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { isAuth, signout } from '../../actions/authAction';
import { APP_NAME } from '../../config';
import Link from 'next/link';
import './adminLayout.css';

const HeaderAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar color='light' light expand='md'>
        <Link href='/'>
          <NavbarBrand style={{ cursor: 'pointer' }}>{APP_NAME}</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link href='/admin/category'>
                <NavLink style={{ cursor: 'pointer' }}>Category</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/admin/service'>
                <NavLink style={{ cursor: 'pointer' }}>Service</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/admin/single-service'>
                <NavLink style={{ cursor: 'pointer' }}>Single Service</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/admin'>
                <NavLink style={{ cursor: 'pointer' }}>Admin</NavLink>
              </Link>
            </NavItem>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href='/signup'>
                    <NavLink style={{ cursor: 'pointer' }}>Sign Up</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/signin'>
                    <NavLink style={{ cursor: 'pointer' }}>Sign In</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: 'pointer' }}
                  onClick={() => signout(() => Router.replace('/signin'))}
                >
                  Sign Out
                </NavLink>
              </NavItem>
            )}

            {/* {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href='/user'>
                  <NavLink style={{ cursor: 'pointer' }}>
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href='/admin'>
                  <NavLink style={{ cursor: 'pointer' }}>
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )} */}
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

const AdminLayout = (props) => {
  //  console.log('layout')
  return (
    <React.Fragment>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
        />
      </Head>
      <HeaderAdmin />

      {props.children}
    </React.Fragment>
  );
};

export default AdminLayout;
