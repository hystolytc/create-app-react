import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Badge from './Badge'

const describeComponent = '<Badge /> test case'

describe(describeComponent, () => {
  const { container } = render(<Badge />)

  test(`Render ${describeComponent}`, () => {
    expect(container).toMatchSnapshot()
  })
})