const dates = [
    {
        name : "End of this month",
        date : endMonth(),
    },
    {
        name : "End of this Year",
        date : endYear(),
    },

    {
        name : "End of Next Month",
        date : new Date('Oct,30,2020'),
    },

    {
        name : "June's Birthday",
        date : new Date(1993, 10,13),
    },
    {
        name:"My Birthday",
        date: new Date(1965, 11, 14),        
    },
    {
        name :"Kuk's Birthday",
        date : new Date(1962, 8, 9),
    },
    {
        name : "Wedding Anniversary",
        date : new Date(1991, 12, 8),
    },
    {
        name : "ChooSuk",
        date : new Date(2020, 9,30),
    },
    {
        name : "Dad Memorial Date",
        date : new Date(2017, 4, 30),
    },
    {
        name : "Leaving Work",
        date : leavingHour(),
    },
]

function endYear(){
    let today = new Date();    
    return ( new Date(today.getFullYear(), 11, 31))
}
function endMonth(){

    let today = new Date();;
    // End of this Month = 0 date of Next Month
    return new Date(today.getFullYear(), today.getMonth()+1, 0) 
}
function leavingHour(){
    let today = new Date();
    let leaving= new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 0,0 );
    let diff = leaving - today;
    console.log('today', today , ', leaving', leaving, 'diff', diff );
    return leaving;
    
}
export default dates;