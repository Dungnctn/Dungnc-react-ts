import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
// import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  SettingOutlined,
  LoginOutlined,
  ProfileOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

type Props = {}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminPage = (props: Props) => {
    function handleMenuClick(e) {
        console.log('click', JSON.parse(localStorage.getItem("user")));
      }
      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1"><NavLink to={'/'}>Trang chủ</NavLink></Menu.Item>
          <Menu.Item key="1">Cập nhật Admin</Menu.Item>
          <Menu.Item key="2">Đăng xuất</Menu.Item>
        </Menu>
      );
  return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <NavLink to={""} >Thống kê</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                <NavLink to={'user'} >User</NavLink>
            </Menu.Item>
            <Menu.Item key="sub1" icon={<ProfileOutlined />}>
                <NavLink to={'category'}>Category</NavLink>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<ShopOutlined/>}>
                <NavLink to={'product'}>Product</NavLink>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
            Files
            </Menu.Item>
        </Menu>
        </Sider>
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
        <Dropdown overlay={menu}>
        <Avatar style={{float: 'right', marginTop: "10px"}} src='../../public/icon-avatar.png' />
            
        </Dropdown>
        </Header>
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Outlet />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
  )
}

export default AdminPage





/**
 * <div>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <NavLink to="/"><img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/></NavLink>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink to="" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Thống kê</NavLink>
                    <NavLink to="product" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản phẩm</NavLink>
                    <NavLink to="category" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Danh mục</NavLink>
                    <NavLink to="user" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tài khoản</NavLink>
                    </div>
                </div>
                </div>
                <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                    <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    </button>
        
                    <div className="user ml-3 relative">
                    <div>
                        <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        </button>
                    </div>

                    <div className="abc hidden origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Sửa hồ sơ</a>
        
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Cài đặt</a>
        
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Đăng xuất</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
            <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div>
            <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                    <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
                <button type="button" className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sửa hồ sơ</a>
        
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Cài đặt</a>
        
                <a href="/#/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Đăng xuất</a>
                </div>
            </div>
            </div>
        </nav>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Outlet />
          </div>
        </main>
    </div>
 */