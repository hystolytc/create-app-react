import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Name from './Name'

const describeComponent = '<Name /> test case'

describe(describeComponent, () => {
  const { container } = render(<Name />)

  test(`Render ${describeComponent}`, () => {
    expect(container).toMatchSnapshot()
  })
})