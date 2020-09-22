import React from 'react';

import tShirtImage from '../../assets/tshirt.png';
import SellerInfo from '../../components/SellerInfo';
import ProductAction from '../../components/ProductAction';

import { Container, Row, Panel, Column, Gallery, Section, Description, } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>


      <Panel>
        <Column>
          <Gallery>
            <img src={tShirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis leo quis sem pulvinar hendrerit. Etiam semper diam eros. Proin nisl arcu, pharetra dictum viverra et, pulvinar non orci. Nulla congue lectus vel enim ullamcorper, vitae elementum ligula aliquam. Donec ut massa enim. Cras faucibus vulputate libero a tincidunt. Mauris a sapien efficitur, venenatis massa ut, suscipit nisi. Donec vitae orci a est varius dictum a ac enim. Phasellus faucibus lobortis urna a ullamcorper. Vestibulum congue felis erat.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      Integer suscipit lacinia risus, vitae mattis metus hendrerit at. Morbi blandit sem id ex ullamcorper, sed efficitur ligula euismod. In accumsan lacus vitae commodo mollis. Nunc nisl ipsum, maximus id purus quis, vestibulum pulvinar odio. Fusce gravida scelerisque elementum. Ut risus nulla, convallis eu sapien ac, condimentum aliquam lectus. Nunc ut porttitor odio. Sed mauris massa, elementum id finibus eu, ultrices at ipsum.

      Nulla maximus, mauris ut mollis pulvinar, diam quam luctus massa, eu fringilla eros magna quis ligula. Curabitur massa sapien, ornare sit amet purus quis, faucibus ultrices orci. Integer lacinia lorem leo, a blandit magna lacinia vel. Cras viverra est ut enim placerat, nec aliquet neque euismod. Curabitur faucibus sed ante sit amet semper. Morbi fermentum venenatis dolor eu gravida. Ut posuere iaculis neque in ultrices.
    </p>
  </Description>
)

export default Product;
