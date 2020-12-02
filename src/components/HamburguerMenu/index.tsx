import React, { useState } from 'react';
import Link from 'next/link';

import { Container, Menu, Bar, Nav, NavList, NavListItem } from './styles';

type HamburguerProps = {
  links: { id: number; label: string; href: string }[];
};

const HamburguerMenu = ({ links }: HamburguerProps) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <Container>
      <Menu onClick={toggleMenu} open={open}>
        <Bar />
        <Bar />
        <Bar />
      </Menu>
      <Nav open={open}>
        <NavList>
          {links.map(({ id, label, href }) => (
            <NavListItem key={id}>
              <Link href={href}>
                <a onClick={toggleMenu}>{label}</a>
              </Link>
            </NavListItem>
          ))}
        </NavList>
      </Nav>
    </Container>
  );
};

export default HamburguerMenu;
