// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name=name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
let temp=sentence.split(' ');
sentence='';
for(let i=0;i<temp.length;i++){
    if(i>0)
        sentence+=' ';
    temp[i]=temp[i][0].toUpperCase()+temp[i].slice(1,temp[i].length);
    sentence+=temp[i];
}
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money=money.slice(1,money.length)
console.log(parseInt(money));