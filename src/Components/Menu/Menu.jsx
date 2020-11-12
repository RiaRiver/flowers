import React from 'react';
import styled from 'styled-components';
import ListItem from "./ListItem";
import dbCatalog from "../DBCatalog";

const SectionMenu = styled.section`
  padding: 30px;
`;

const MenuStyled = styled.main`
  background-color: #fff5ff;
  margin-top: 80px;
`;

const Banner = styled.div`
  width: 100%;
  height: 12.5vw;
  min-height: 120px;
  background-image: url('banner.png');
  background-size: cover;
  background-position: bottom center;
`;

const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner/>
    <SectionMenu>
      <h2>Mono Bouquet</h2>
      <ListItem
        itemList={dbCatalog.monobouquet}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
    <SectionMenu>
      <h2>Bouquet</h2>
      <ListItem
        itemList={dbCatalog.bouquet}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
  </MenuStyled>
);

export default Menu;