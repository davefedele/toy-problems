//Find the number of divisors of a positive integer n.

// Test.assertEquals(getDivisorsCnt(1) , 1);
// Test.assertEquals(getDivisorsCnt(10) , 4);
// Test.assertEquals(getDivisorsCnt(11) , 2);
// Test.assertEquals(getDivisorsCnt(54) , 8);

function getDivisorsCnt(n){
    var count = 0;
    for (var i=1; i<=n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    return count;
}
