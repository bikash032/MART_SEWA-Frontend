import React, { useState } from 'react';
import {
  Monitor,
  LayoutDashboardIcon,
  Bandage,
  AlignCenter,
  UserCheck,
  AlignCenterIcon,
  ShoppingCart,
  BadgeDollarSign,
  MessagesSquare,
  Settings,
  Languages,
} from 'lucide-react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { PageTitle } from '@/components/page-title/PageTitle';
import { NavLink } from 'react-router';
import BannerList from '../banner/bannerList';

const { Content, Sider, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return { key, icon, children, label } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to="/dashboard">Dashboard</NavLink>, '1', <LayoutDashboardIcon size={18} />),
  getItem(<NavLink to="/banners">Banners</NavLink>, '2', <Monitor size={18} />),
  getItem(<NavLink to="/brands">Brands</NavLink>, '3', <Bandage size={18} />),
  getItem(<NavLink to="/categories">Categories</NavLink>, '4', <AlignCenter size={18} />),
  getItem(<NavLink to="/users">Users</NavLink>, '5', <UserCheck size={18} />),
  getItem(<NavLink to="/products">Products</NavLink>, '6', <AlignCenterIcon size={18} />),
  getItem(<NavLink to="/orders">Orders</NavLink>, '7', <ShoppingCart size={18} />),
  getItem(<NavLink to="/transactions">Transactions</NavLink>, '8', <BadgeDollarSign size={18} />),
  getItem(<NavLink to="/chat">Chat</NavLink>, '9', <MessagesSquare size={18} />),
  getItem(<NavLink to="/settings">Settings</NavLink>, '10', <Settings size={18} />),
  getItem(<NavLink to="/language">English</NavLink>, '11', <Languages size={18} />),
];

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-cyan-50 to-cyan-800 text-white">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 sm:p-6 bg-cyan-900 shadow-md">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-16 h-16"
            src="https://thumbs.dreamstime.com/b/letter-ms-logotype-design-company-name-colored-blue-swoosh-vector-logo-business-identity-203870151.jpg"
            alt="Logo"
          />
          <div>
            <PageTitle title="MART SEWA" className="!text-white" />
            <p className="text-sm text-cyan-100">Connecting Customer with Business</p>
          </div>
        </div>

        {/* Admin Info */}
        <div className="flex items-center gap-3">
          <div>
            <p className="text-xs font-bold text-white italic">Welcome Admin !!!</p>
            <p className="text-sm font-bold text-white italic">Bikash Bishokarma</p>
          </div>
          <img
            className="rounded-full w-12 h-12 border-2 border-white"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMG3rEc9cD8zJ8fu7z1YcyaHcVm2qX8di1hA&s"
            alt="Admin"
          />
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={220}
          className="!bg-cyan-600 min-h-full"
        >
          <Menu
            theme="light"
            className="!bg-cyan-600 h-full text-white"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </Sider>

        {/* Main Content */}
        <BannerList/>
      </div>
    </div>
  );
};

export default AdminLayout;
