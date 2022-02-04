import rick from '../assets/pickle-rick.png';
import cover from '../assets/cover.jpg';
import { IconButton } from "./molecules/IconButton";

export const App = () => {
  return (
    <>
    <IconButton content={'Characters'} image={rick}/>
    <IconButton content={'Episodes'} image={cover}/>
    </>
  );
}

