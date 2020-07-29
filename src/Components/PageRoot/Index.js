import React from 'react';
import Menu from '../Menu/Index';
import Footer from '../Footer/index';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--grayMedium);
    flex: 1;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageRoot({ children }){
    return (
        <>
            <Menu />

                <Main>
                    {children}
                </Main>

            <Footer />
        </>    
    );
}

export default PageRoot;