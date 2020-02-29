import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    display: flex;
    justify-content:flex-end;
    flex-direction:row;
    margin: 24px 0;

`;
export const LinkTo = styled(Link)`
    color:gray!important;
    margin-left: 8px;
`;