export const formatNumber = val => {
    if(val/1000000>1) {
        return((val/1000000).toFixed(2)+" m");
    }
    else if(val/1000>1) {
        return((val/1000).toFixed(2)+" k");
    }else{
        return(val);
    }   
}