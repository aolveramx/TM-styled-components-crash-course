import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  p {
    text-align: right;
  }

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {

    text-align: center;

    p {
      text-align: center;
    }
    
    ul {
      padding: 0;
    }
    
  }
`