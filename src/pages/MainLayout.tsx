import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomNav from '../components/BottomNav/BottomNav';
import { MainLayoutProps } from '../types';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <>
  <Header />
  {children}
  <Footer />
  <BottomNav />
  </>;
};

export default MainLayout;
