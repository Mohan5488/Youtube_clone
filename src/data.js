export const API_KEY = "AIzaSyACmJv9NMQIlvvnUDV7_4Q2XBic0NM9ulI";

export function valueCount(x){
    if(x >= 1000000){
        return Math.floor(x/1000000)+'M'
    }
    else if(x >= 10000){
        return Math.floor(x/1000) + 'K'
    }
    else{
        return x;
    }
}