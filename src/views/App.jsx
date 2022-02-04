import rick from '../assets/pickle-rick.png';
import cover from '../assets/cover.jpg';
import { IconButton } from "./molecules/IconButton";
import { Card } from './molecules/Card';
import { CardImage } from './atoms/CardImage';
import { CardText } from './atoms/Text/CardText';
import { CardImageContainer } from './molecules/CardImageContainer';
import { CardsContainer } from './organisms/CardsContainer';

export const App = () => {
  return (
    <>
    <IconButton content={'Characters'} image={rick}/>
    <IconButton content={'Episodes'} image={cover}/>
    <CardsContainer/>
    </>
  );
}

