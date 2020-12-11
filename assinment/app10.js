const A = [  [-4,0,5],
            [-3,-1,2],
            [6,7,-2],
            [1, 1, 2]
         ];

const B = [ [1, 0, 3, 0],
            [4,5,-1, 2],
            [2, 4, 3, 1]
         ];

C = [];

for (var i =0; i< A.length; i++){
    C[i] = [];
    for (var j =0 ; j< A[j].length; j++){
        //console.log(A[i][j]);
        for (var y = 0 ; y < B[0].length ; y++){
                C[i][y] = 0;
            for (var x = 0 ; x < B.length ; x++){
                //console.log(B[x][y]+ "["+x+","+y+"]");
                //console.log(C[i][y]+ "["+i+","+y+"]"); 
                C[i][y] += A[i][j] * B[x][y];
            }
            console.log(C[i][y] + "[" + i + "," +y+"] is the resultant matrix");
        }
    }
}
console.log(JSON.stringify(C));