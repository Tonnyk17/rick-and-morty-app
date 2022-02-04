import { Icon } from "./atoms/Icon";
import { CardText } from "./atoms/Text/CardText";
import { Subtitle } from "./atoms/Text/Subtitle";
import { Title } from "./atoms/Text/Title";
import rick from '../assets/pickle-rick.png';

export const App = () => {
  return (
    <>
    <Title content={'Characters'}/>
    <Subtitle content={'Subtitle'}/>
    <CardText content={'CardText'}/>
    <Icon image={rick}/>
    </>
  );
}

