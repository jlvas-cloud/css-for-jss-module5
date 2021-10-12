import React from 'react';
import styled from 'styled-components/macro';
import Icon from '../Icon';
import Logo from '../Logo';

import { COLORS } from '../../constants';



const MobileHeader = ({onClick})=>{


    return(
        <Wrapper>
            <Logo/>
            <IconWrapper>            
                <StyledIcon id="shopping-bag"/>
                <StyledIcon id="search"/>
                <Button onClick={onClick}>
                    <StyledIcon id="menu"/>
                </Button>
            </IconWrapper>
        </Wrapper>
        


    )
}

const Wrapper = styled.div`
    display:none;
    justify-content: space-between;        
    border-top: 5px solid black;
    border-bottom: 1px solid ${COLORS.gray[300]};
    align-items: center;    
    height: 85px;
    padding: 24px 28px 20px 28px;

    @media ${p=>p.theme.queries.tablet}{
        display:flex;
    }    
    
    @media ${p=>p.theme.queries.phone}{    
        padding: 24px 16px 20px 16px;
}

`
   


const IconWrapper = styled.div`
    display:flex;
    gap: 24px;
`

const StyledIcon = styled(Icon)`
    
`

const Button= styled.button`
    border: none;
    background-color: transparent;

`

export default MobileHeader;