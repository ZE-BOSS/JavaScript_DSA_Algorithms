// Create an algorithm that chooses an apartment on a block that has or is closest to all the required buildings

const blocks = [
    { gym: false, school: true, store: false },
    { gym: true, school: false, store: false },
    { gym: true, school: true, store: false },
    { gym: false, school: true, store: false },
    { gym: false, school: true, store: true }
]

const required = ["gym", "school", "store"];

const solution_1 = (blocks, required) => {
    let closest = {} //variable to store closest block
    let closestIndex = 0 //closest block index

    for(let i = 0; i < blocks.length; i++) {
        let fullfilledAll = true; //variable for checking if block fulfills all consitions
        
        for(let require of required) {
            // declare previous and next block as variables
            const [current, previous, next] = [
                blocks[i]? blocks[i][require] : false,
                blocks[i - 1]? blocks[i - 1][require] : false, 
                blocks[i + 1]? blocks[i + 1][require] : false
            ]

            //check if buildings exits on current or clossest blocks
            if(current || previous || next) {
                fullfilledAll = true
            } else {
                fullfilledAll = false
                break
            }
        }

        //check if all conditions are met and assign variables
        if(fullfilledAll) {
            closest = blocks[i]
            closestIndex = i
        }
    }

    // return result
    return ({ closest, closestIndex })
}

console.log(solution_1(blocks, required))

// Issue with solution_1 is that we didn't take into consideration the possibility of 
// the previous, the present and the next block, not having the required buildings.

const solution_2 = (blocks, required) => {
    const result = []; //final result
    let dp = []; //variable to store all block values

    // dp is an array of arrays eg: [[0,1,1,1], [0,3,1,3], ...] the numbers inner array represents their 
    // distances from from the required building if value is 0 block has required building else if it's 1,
    // required bulding is a block away. the is an extra value at the end of each array (form the above example like: 1, 3)
    // which is the maximum of all the required building distance for that block.

    let m = required.length, n = blocks.length; //variable representing blocks and required length

    //populate dp 
    for(let block of blocks) {
        const res = []

        for(let require of required){
            if(block[require]) {
                res.push(0)
            } else {
                res.push(undefined)
            }
        }

        dp.push(res)
    }

    console.log({ "Initialize dp": dp })

    // check condition for first block in blocks from left to right
    for(let j = 0; j < m; j++) {
        if(blocks[0][j]) {
            dp[0][j] = 0;
        }

        const prev = dp[0] && dp[0][m]? dp[0][m] : 0
        dp[0][m] = Math.max(prev, dp[0] && dp[0][j]? dp[0][j] : 0);
        result.push(dp[0][m]);
    }

    console.log({ "Run First Element": dp });

    // check condition for the remaining elements from left to right
    for(let i = 1; i < n; i++) {
        dp[i][m] = 0; //initialize the maximum variable for each block to zero (0)

        for(let j = 0; j < m; j++) {
            if(dp[i][j] !== 0 && !dp[i][j]) {
                dp[i][j] = dp[i - 1][j] + 1;
            } 
    
            const prev = dp[i] && dp[i][m]? dp[i][m] : 0
            dp[i][m] = Math.max(prev, dp[i] && dp[i][j]? dp[i][j] : 0);
        }
    }

    console.log({ "Left to Right": dp })

    // check condition for the all elements from right to left, skiping the first element from the right.
    for(let i = n - 2; i >= 0; i--) {
        for(let j = 0; j < m; j++) {
            if(dp[i][j] !== 0 && !dp[i][j]) {
                dp[i][j] = dp[i + 1][j] + 1;
            }
    
            const prev = dp[i] && dp[i][m]? dp[i][m] : 0
            dp[i][m] = Math.max(prev, dp[i] && dp[i][j]? dp[i][j] : 0);
            result[i] = dp[i][m];
        }
    }

    result.push(dp[n - 1][m])

    console.log({ "Right to Left": dp, result })

    const distance = Math.min(...result)

    // return result
    return ({ distance: distance, closest: blocks[result.indexOf(distance)], closestIndex: result.indexOf(distance) })
}

console.log(solution_2(blocks, required));

// create funtions that returns Hello World

