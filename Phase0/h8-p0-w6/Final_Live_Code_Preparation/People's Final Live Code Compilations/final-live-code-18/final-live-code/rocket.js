/*
----------------------------
ROCKET - Operation Evaluator
----------------------------
PROBLEM
=======
Proses nested object di bawah ini menjadi operasi matematika dan hitung hasil akhirnya!
diberikan operator +, -, *, dan /. Abaikan pembulatan dan biarkan angka koma tetap ada.
Wajib menggunakan metode rekursif!
*/
function operationEvaluator(operation) {
  // only code here...
  console.log(op1.left + op1.op + op1.right.left + op1.right.op + op1.right.right.left + op.right.right.op + op1.right.right.right.left + op1.right.right.right.op)
}


var op1 = {
  left: 5,
  op: '-',
  right: {
    left: 3,
    op: '*',
    right: {
      left: 8,
      op: '-',
      right: {
        left: 200,
        op: '/',
        right: 5,
      }
    }
  }
};

// proses: 5 - (3 * (8 - (200 / 5)))
console.log(operationEvaluator(op1)); // 101

var op2 = {
  left: {
    left: 10,
    op: '*',
    right: {
      left: 2,
      op: '+',
      right: 1,
    },
  },
  op: '+',
  right: {
    left: 5,
    op: '*',
    right: {
      left: 1,
      op: '-',
      right: {
        left: 1,
        op: '+',
        right: 2,
      }
    }
  }
};

// proses: ((10 * (2 + 1)) + (5 * (1 - (1 + 2)))
console.log(operationEvaluator(op2)); // 20
