exports.getMarketBeneficiary = (data)=>{
    if(data[3]==0){
        return 'GESTANTES LACTANTES';
    }
    else if(data[3]==1){
        return '6 A 11  MESES';
    }
    else if(data[3]==2){
        return '1 A 2 AÑOS';
    }
    else if(data[3]==3){
        return '3  A 5 AÑOS';
    }
}