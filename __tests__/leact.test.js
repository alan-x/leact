import Leact from './../src/Leact'

describe('Leact', () => {
    test(`text`, () => {
        expect(Leact.createElement('text')).toEqual(`var t='';t+='123';return t;`)
    })
    test(`div`, () => {
        expect(<p color='white'>123</p>).toEqual(`var t='';t+='123';return t;`)
    })

})