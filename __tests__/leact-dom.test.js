import LeactDom from "../src/LeactDom";

describe('Leact', () => {
    test(`text`, () => {
        expect(LeactDom.render('111')).toEqual(`var t='';t+='123';return t;`)
    })
    test(`div`, () => {
        expect(<p color='white'>123</p>).toEqual(`var t='';t+='123';return t;`)
    })

})