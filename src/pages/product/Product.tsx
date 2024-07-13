
import MainContent from '@/components/productPageContent/MainContent';
import SideBar from '@/components/productPageContent/SideBar';
import SecondNavbar from '@/components/ui/shared/SecondNavbar';
import React from 'react';

const Product = () => {
    return (
        <div className='mb-20'>
            <SecondNavbar/>
            <div className='flex w-full max-w-7xl mx-auto gap-10'>
                <SideBar/>
                <MainContent/>
            </div>
        </div>
    );
};

export default Product;