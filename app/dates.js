let d;
module.exports = {

    dateLisible:function(annees,mois,jours){

        d = new Date(annees,mois-1,jours);
        
        var dat = new Date(d).toDateString();
       
        var d1 = new Date(dat),
         month = '' + (d1.getMonth() + 1),
         day = '' + d1.getDate(),
         year = d1.getFullYear();

        
        return [day, month,year].join(' ');
    },

    date1000: ()=>{
        var n = 1000;
        var j = d.getDate();
        var date1 = new Date(d.setDate(j+n));

        return date1.toDateString();
    }
};