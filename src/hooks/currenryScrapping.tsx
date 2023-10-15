import * as htmlparser2 from "htmlparser2";
import React from 'react'
import { getByCurrency, patch, store as storeExchange } from '../api/exchangesApi';

export const useExchange = async ( ) => {
  const [ usdExchange, setUsdExchange] = React.useState('')
    
    const searchUrl = `https://www.bcv.org.ve/`;
    const response = await fetch(searchUrl);   // fetch page
    // console.log('response', response)
    const htmlString = await response.text();  // get response text
      // console.log('htmlString', htmlString)
    // const dom = htmlparser2.parseDocument(htmlString);
    //       // console.log('dom', dom)
    // const render = htmlparser2.DomUtils.getElementById('dolar', dom)
    // console.log('render', render)

    var handler = new htmlparser2.DomHandler(function(error, dom) {

      if (error) {
        console.log('Parsing had an error');
        return;
      } else {
        const item = htmlparser2.DomUtils.findAll(element => {
          const matches = element.attribs.class === 'col-sm-6 col-xs-6 centrado';


          // if (element.attribs.class === 'col-sm-6 col-xs-6 centrado') {
          //   console.log('element', htmlparser2.DomUtils.textContent( element )  )
          // }


          return matches;
        }, dom);
    
        if (item) {
          setUsdExchange( htmlparser2.DomUtils.textContent( item[3] ).replace(',', '.').replaceAll(' ', '') )
          // console.log( 'exchange', usdExchange);
        }
      }

    });
    
    var parser = new htmlparser2.Parser(handler);
    parser.write(htmlString);
    parser.end();

    if (usdExchange) {
      
      const exchange = {
        currency: 'VEF',
        exchange: usdExchange
      }

        // storeExchange( exchange )
        patch( exchange )
        console.log( 'exchange', exchange);
          
    }
    return usdExchange
    
  }
  