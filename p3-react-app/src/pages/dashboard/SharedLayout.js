import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar, Sidebar, Smallsidebar} from '../../components/index';

const SharedLayout = () => {
  return (
    <>
        <main>
            <Smallsidebar />
            <Sidebar />
            <div>
                <Navbar />
                <div>
                    <Outlet/>
                </div>
            </div>
        </main>
    </>
  )
}

export default SharedLayout;