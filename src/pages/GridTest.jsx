import styled from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/system';

const Children = styled.div`
  background-color: #0055f3;
  border: 1px solid #f00;
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

function GridTest() {
  const elements = [300, 400, 300, 50, 100];

  return (
    <Masonry columns={2} spacing={2}>
      {elements.map((height, index) => {
        return (
          <Box key={index} sx={{ height, backgroundColor: '#0055f3' }}>
            {index + 1}
          </Box>
        );
      })}
    </Masonry>
  );
}

export default GridTest;
