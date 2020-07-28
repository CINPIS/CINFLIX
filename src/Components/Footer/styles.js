import styled from 'styled-components';

export const FooterBase = styled.footer`

    background: var(--black);
    border-top: 2px solid var(--primary);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 30px;
    padding-bottom: 30px;
    color: var(--grayMedium);
    font-weigth: lighter;
    text-align: center;
    font-size: 12px;
    
    @media (max-width: 800px) {
      margin-bottom: 50px;
    }
}

`;

export default FooterBase;
