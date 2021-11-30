// This version should generate all subsequences then finds the largest matching subsequence
function bruteForce2(phrase1,phrase2)
{
  var seq1 = substrings(phrase1);
  var seq2 = substrings(phrase2);
  var temp = [];

  for(var i = 0; i < seq1.length; i++)
  {
    for(var j = 0; j < seq2.length; j++)
    {
        if(temp.length === 0 )
        {
          temp = seq1[i];
        }
        if (seq1[i].length > temp.length && seq1[i]=== seq2[j])
        {
          temp = seq1[i];
          //console.log(temp);
        }
      
    }  
  }
  console.log("BruteForce2 LCS is: " + temp);
}
/*
//utility function that should return all subsequences
function parse(phrase)
{
  var seq = [];
    for(var i = 0, var j = 1; i < phrase.length; i++,j++)
  {
    seq.push(phrase.substring(i,j));
  }
      for(var k = Math.pow(2,phrase.length); k < phrase.length; k++)
      {
        seq.push(phrase.slice(i,k));
        
      }
    }
  console.log(seq);
  return seq;
}
*/

//found from https://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  return combi;
}


module.exports = {bruteForce2};
