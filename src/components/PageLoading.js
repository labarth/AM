import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const StyledPageLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(239, 237, 236);
`;

export const PageLoading = () => (
  <StyledPageLoading>
    <Spin indicator={antIcon} />
  </StyledPageLoading>
);