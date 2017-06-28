var sum=0;
var first=0,second=1, third;
third=first+second;
while(third<4000000){
  third=first+second;
  if(third%2===0)
  {
    sum=sum+third;
  }
  first=second;
  second=third;
}
console.log(sum);
