import React from 'react';
import FestivalFooter from '@/domains/festivals/components/FestivalFooter';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-dvh w-full justify-center">
      <div className="flex h-fit w-full max-w-[500px]">{children}</div>
      <FestivalFooter />
    </div>
  );
};

export default Layout;
