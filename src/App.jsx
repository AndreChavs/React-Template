import ContainerFlex from "./components/Common/Layout/Container/ContainerFlex";
import Grid1 from "./components/Common/Layout/Grids/Grid1";
import Grid2 from "./components/Common/Layout/Grids/Grid2";
import Grid3 from "./components/Common/Layout/Grids/Grid3";
import Grid4 from "./components/Common/Layout/Grids/Grid4";
import Grid6 from "./components/Common/Layout/Grids/Grid6";
import Grid12 from "./components/Common/Layout/Grids/Grid12";

function App() {
  return <main className='App'>
    <ContainerFlex className='border'>
      <Grid1 className='borderGrid'>Grid 1</Grid1>
      <Grid2 className='borderGrid'>Grid 2</Grid2>
      <Grid3 className='borderGrid'>Grid 3</Grid3>
      <Grid6 className='borderGrid'>Grid 6</Grid6>      
    </ContainerFlex>

    <ContainerFlex className='border'>
      <Grid6 className='borderGrid'>Grid 6</Grid6>
      <Grid6 className='borderGrid'>Grid 6</Grid6>
    </ContainerFlex>
    <ContainerFlex className='border'>
      <Grid12 className='borderGrid'>Grid 12</Grid12>      
    </ContainerFlex>

    <ContainerFlex className='border'>
      <Grid6 className='borderGrid offset-6'>Grid 6 e Offset6</Grid6>      
    </ContainerFlex>

    <ContainerFlex className='border'>
      <Grid4 className='borderGrid offset-4'> </Grid4>      
      <Grid4 className='borderGrid'>Grid 4</Grid4>      
    </ContainerFlex>
    <ContainerFlex className='border space-between'>
      <Grid3 className='borderGrid'>Grid 3</Grid3>
      <Grid2 className='borderGrid'>Grid 2</Grid2>
      <Grid3 className='borderGrid'>Grid 3</Grid3>
    </ContainerFlex>

    <ContainerFlex className='border wrap'>
      <Grid6 className='borderGrid'>Grid 6</Grid6>
      <Grid3 className='borderGrid'>Grid 3</Grid3>
      <Grid3 className='borderGrid'>Grid 3</Grid3>
    </ContainerFlex>
  </main>
}

export default App;
