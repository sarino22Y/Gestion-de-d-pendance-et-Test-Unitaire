
const assert = require('chai').assert;
const dateApp = require('../app/dates');

describe('AppTest',function(){
    describe('dateLisible',function() {
        it('La date lisible: 31 12 2020',function(){
            let result = dateApp.dateLisible(2020,12,31);
            assert.equal(result,'31 12 2020');
        });
    });

    describe('date1000',function() {
        it('La date apres 1000 jours: Wed Sep 27 2023',function(){
            let result = dateApp.date1000();
            assert.equal(result,'Wed Sep 27 2023');
        });
    });
});




/*TEST DU RESULTAT*/
// var app = require('../app/dates');
// var date1 = app.dateLisible(2020,12,31);
// var date2 = app.date1000();
// console.log(date1);
// console.log(date2);