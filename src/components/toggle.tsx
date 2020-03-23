import React from 'react'
import styled from 'styled-components'
import { commonTheme } from '../theme/commonTheme'

const Container = styled.div`
  position: absolute;
  bottom: 110px;
  right: 110px;
  z-index: 10;
  width: 0;
  height: 0;
`
const Label = styled.label`
  position: absolute;
  width: 62px;
  height: 34px;
  border-radius: 17px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    margin: 5px;
    background: ${commonTheme.colors.light.menu};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-out;
  }
`

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 62px;
  height: 34px;

  &:checked + ${Label} {
    background: ${commonTheme.colors.light.accent};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 23px;
      height: 23px;
      margin-left: 33px;
      transition: 0.2s;
      z-index: 6;
    }
  }
`

interface ToggleProps {
  on: boolean
  toggle: () => void
}

const Toggle = ({ on, toggle }: ToggleProps) => (
  <Container>
    <Input type="checkbox" id="checkbox" checked={on} onChange={toggle} />
    <Label htmlFor="checkbox" />
  </Container>
)

export default Toggle
