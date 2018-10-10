import LeactDom from "../src/LeactDom";
import JSDOM from 'jsdom'

console.log(new JSDOM.JSDOM('<div id="app"></div>').window.document.getElementById('app'))
describe('Leact', () => {
    test(`text`, () => {
        let app=new JSDOM.JSDOM('<div id="app"></div>').window.document.getElementById('app')

        expect(LeactDom.render('111',app)).toEqual(`var t='';t+='123';return t;`)
    })
    test(`div`, () => {
        let app=new JSDOM.JSDOM('<div id="app"></div>').window.document.getElementById('app')
        expect(LeactDom.render(<p color='white'>123</p>,app)).toEqual(`var t='';t+='123';return t;`)
    })

})