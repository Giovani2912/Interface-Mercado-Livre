import React from 'react';
import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, 
  Row, 
  Panel, 
  Column, 
  Gallery, 
  Section, 
  Description 
} from './styles';

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
            <img src={tshirtImage} alt="T-shirt"/>
          </Gallery>
          <Info/>

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
        <p className="description">Receba o produto que você esta esperando em sua casa</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = ()=>(
  <Description>
    <h2>Descrição</h2>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    <br/>
    <br/>
    Itens inclusos:
    -1x Led <br/>
    -1x Led <br/>
    -1x Led <br/>
    -1x Led <br/>
    -1x Led <br/>
    <br/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    
  </Description>
)
export default Product;
