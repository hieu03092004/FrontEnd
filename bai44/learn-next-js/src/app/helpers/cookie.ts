export const setCookie=(name:string,value:string,days:number):void=>{
    const expires=days?`expires:${new Date(Date.now()+days*24*60*60*1000).toUTCString()}`:"";
    document.cookie=`${name}=${value};${expires}`;
}