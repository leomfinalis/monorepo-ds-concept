import { Button } from '@ds-fnl-concept/ui';
import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="design-system" />
    </StyledApp>
  );
}

export default App;
