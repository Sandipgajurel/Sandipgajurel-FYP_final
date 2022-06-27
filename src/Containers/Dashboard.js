import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import ProductView from './Products/ViewProduct';
import { button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Cardimage from './Card';

function Dashboard() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/ProductAdd`;
    navigate(path);
  }
  const logout = () => {
   //window.location.reload(true)
    navigate(`/`)
  }
  return (
    <div>
    <Navbar />
    <div className='row'  >
      <div className='col-md-2' style={{ display: 'flex', height: 'auto', overflow: 'scroll initial',background: `rgb(177,176,242)`,
                  background: `linear-gradient(90deg, rgba(177,176,242,0.9668242296918768) 28%, rgba(148,187,233,0.9136029411764706) 73%)` }}>
        <CDBSidebar textColor="#fff" style={{background:'black'}}>
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              ADMIN MENU
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/ProductAdd" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user"> product Add</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/ProductView" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Products</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/orderview" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Orders</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/" onClick={logout} activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">logout</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '20px 5px',
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter> */}

        </CDBSidebar>
      </div>

    <div className='col-md-10' style={{paddingLeft:'50px',paddingBottom:'100px' ,background: `rgb(177,176,242)`,
                  background: `linear-gradient(90deg, rgba(177,176,242,0.9668242296918768) 28%, rgba(148,187,233,0.9136029411764706) 73%)` }}>
    <Cardimage />
    </div>
    </div>

    {/* <button type="button" class="btn btn-primary" onClick={routeChange}>Add products</button> */}
    <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
      <Footer />
    </div>
  </div>
  );
}
export default Dashboard;