const accId=123234             //constant 
let accEmail="abc@gmail.com"  //block scope {scope inside curly braces}
var accPass="12345"           // funtion scope
accCity = "Jaipur"            //can also use this for var. declaration  but not recomended
let accState;                 // value = undefined


/*prefer let over var*/


console.log(accId);            //printing


console.table([accCity,accId,accEmail,accPass,accState]);     //for printing all variable in tabular structure
 

/* output
123234
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 'Jaipur'        │
│ 1       │ 123234          │
│ 2       │ 'abc@gmail.com' │
│ 3       │ '12345'         │
│ 4       │ undefined       │
└─────────┴─────────────────┘
*/
