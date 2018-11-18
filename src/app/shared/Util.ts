export default class Util {
  static setQueryParams(url: string, params: {[x:string]: any}){
    let idx: number, queryStr: string, newUrl: string, rx: RegExp, foundParams: {[x:string]:any};
    url = url.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    if((idx = url.indexOf('?')) !== -1){
      rx = /[\\?&](.(?!&))+/g;
      queryStr = url.substring(idx);
      newUrl = url.substring(0, idx);
      console.log(queryStr);
      console.log(newUrl);
      console.log(queryStr.match(rx));
      foundParams = queryStr.match(rx).reduce((acc, curr)=>{
        let pair: string[];
        curr = curr.substring(1);// drop the ? or &
        console.log(curr);
        pair = curr.split('=');
        acc[pair[0]] = pair[1];
        return acc;
      }, {});
      console.log(foundParams);
    }
    console.log(url);
  }
}
