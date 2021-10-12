/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import {COLORS} from '../../constants';
import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <DismissButton onClick={onDismiss}><Icon id='close'/></DismissButton>
        <NavWrapper>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavWrapper>
        <FooterWrapper>
          <NavLinkFooter href="/terms">Terms and Conditions</NavLinkFooter>
          <NavLinkFooter href="/privacy">Privacy Policy</NavLinkFooter>
          <NavLinkFooter href="/contact">Contact Us</NavLinkFooter>
        </FooterWrapper>
      </Content>
    </Dialog>
  );
};

const DismissButton = styled.button`
  width: fit-content;
  align-self: flex-end;
  background-color: transparent;  
  border: none;
  margin-top:32px;
  margin-right:22px 

`


const Dialog = styled(DialogOverlay)`
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  background-color:hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
;
  
`

const Content= styled(DialogContent)`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px; 
  background-color: white;
`

const NavWrapper = styled.nav`
  display:flex;
  flex-direction: column;
  margin-top: 20%;
  margin-left:32px;
  gap:22px;
`

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-weight: 600;

  &:first-of-type{
    color: ${COLORS.secondary}
  }
`

const FooterWrapper = styled.nav`
  display:flex;
  flex-direction: column; 
  margin-left:32px;
  margin-bottom: 32px;
  gap:15px;
`

const NavLinkFooter = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${COLORS.gray[700]};
`


export default MobileMenu;
