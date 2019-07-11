import { normalize } from "."

describe('normalization', () => {
  it('returns a blank string if the name is undefined', () => {
    expect(normalize(undefined)).toEqual('')
  })

  it('returns a blank string if the name is null', () => {
    expect(normalize(null)).toEqual('')
  })

  it('capitalizes the first letter', () => {
    expect(normalize('quincy')).toEqual('Quincy')
  })

  it('lower-cases the following letters', () => {
    expect(normalize('JOSEPH')).toEqual('Joseph')
  })

  it('handles single letter names', () => {
    expect(normalize('q')).toEqual('Q')
  })
})
