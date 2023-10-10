import * as htmlparser2 from "htmlparser2";

export const getCurrencies = () => {

}


export const exchange = async ( amount ) => {
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
          if (element.attribs.class === 'col-sm-6 col-xs-6 centrado') {
            console.log('element', htmlparser2.DomUtils.textContent( element )  )
          }
          return matches;
        }, dom);
    
        if (item) {
          // console.log( 'children', item[0].firstChild.toString());
        }
      }
    });
    
    var parser = new htmlparser2.Parser(handler);
    parser.write(htmlString);
    parser.end();

  }
  