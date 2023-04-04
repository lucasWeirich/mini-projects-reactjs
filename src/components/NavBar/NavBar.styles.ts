import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--colorDark);
  border-bottom: solid 1px var(--colorBorder);

  & .Container {
    height: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 20px;
  }
`

export const Logo = styled.img`
  height: 80px;
`

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`

export const Search = styled.form<{
  active: boolean
}>`
  height: 33px;
  display: flex;
  justify-content: end;
  position: relative;

  & input {
    width: 0%;
    height: 100%;
    max-width: 100px;
    padding: 0 10px;
    background-color: var(--colorSubDark);
    border: solid 1px var(--colorBorder);
    border-radius: 5px;
    outline: none;
    transition: all 0.3s;
    ${p => p.active && `
      width: 100%;
      max-width: 300px;
      box-shadow: 0 0 0px 2px var(--colorEmphasisSubLight);
    `}
    &:focus {
      
    }
  }

  & span {
    width: 40px;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: var(--colorSubDark);
    flex-flow: wrap;
    border: none;
    border-radius: 5px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.3s;

    & svg path {
      transition: all 0.5s;
    }

    &:hover {
      background-color: var(--colorEmphasisSubLight);
      cursor: pointer;
      
      & svg path {
        fill: var(--colorEmphasisDark)!important;
      }
    }
  }
`

export const Menu = styled.nav<{
  active: boolean
}>`
  width: 100%;
  height: auto;
  visibility: collapse;
  max-height: 0px;
  max-width: 300px;
  overflow-y: auto;
  background-color: var(--colorSubDark);
  border-radius: 0 0 5px 5px;
  border: solid 1px var(--colorBorder);
  box-shadow: 0 0 0px 2px var(--colorEmphasisSubLight);
  position: absolute;
  top: 32px;
  transition: all 0.3s;
  ${p => p.active && `
    max-height: 350px;
    visibility: visible;
  `}

  & ul {
    list-style: none;
    transition: all 0.3s;

    &:hover {
      & li {
        opacity: 0.4;
      }
    }

    & li {
      display: flex;
      flex-direction: column;
      padding: 5px 10px;
      border-bottom: solid 1px var(--colorBorder);
      transition: all 0.3s;
      color: var(--colorLight);
      font-size: 14px;
      font-weight: 600;

      &:hover {
        background: var(--colorBorder);
        opacity: 1;

        & a {
          color: #fff;
        }

        & p {
          color: var(--colorEmphasisSubLight);
        }
      }

      & a {
        color: var(--colorLight);
        text-decoration: none;
        transition: all 0.3s;
      }

      & p {
        font-size: 12px;
        transition: all 0.3s;
      }
    }
  }
`