
function findTrees(treeArea){
    const splitTreeArea=treeArea.split('\n')
    const lineLength=treeArea.indexOf('\n')
    let x=0,trees=0

    splitTreeArea.forEach((line,lineNum)=>{
        const treeLineArray=line.split('')
        if(treeLineArray[x]==='#'){
            trees++
        }
        if(x+3>=lineLength){
            x=x+3-lineLength
        }else{
            x=x+3
        }
    })
    return trees
}


const text=`....#..#.......#........#....#.
..##.#.#.#...................#.
....#.#.##..#....#......#......
.........#.#......##.....#.....
..........#.###.##...##........
#....#.#.......##.....#..#.....
#...........#.#...#..#..##.##..
......##.............#.....#...
..##..........###..#.#..##.....
...........#........#......##..
..##...........##..............
..#......###.#.....#.#.#.......
..#..#..#..........#.#....#....
.#.....##......................
...#...##..#...#.........#..##.
.#......#..#..#...#......#.##..
..##.##.......#..#.....#..#...#
..............#..#..#...#......
...#...#....##.....#...#...#...
......................#...#....
.......#......#...#..##...#.#..
##......#..#.....#....#.....#..
....#.#.##.#.#....#............
#.....##.............#.........
..........#...........#.#.....#
...#...##....#.#........#..#...
................#..#.##.##....#
......#...#...##...##....#.....
##....#..#..#...#..#...........
#..................#...#.#..#..
....##....##.#....#..#......#..
.....#...........#.........##..
..#..............#.........#..#
......##....................#..
..#.....###...####...#...#.##..
#..#.#......#.....#.......#.#..
##.#.........######........#...
..#....###...#.#..............#
.....#..............#.........#
....#......#..#.........#...#..
.....###.....#.###.......###...
#.#..#.....#....##...#........#
..##....#..#.........#...#.#...
..#..##.............#....#.#.#.
..##.#..#.#.#.........##.......
#.#..#.........#..............#
#..#.........###.......#.#..#.#
.............#...#....#......#.
..........#.#...##.###.....#.#.
..#.....#......................
.......#......###.#.......#....
....#....#.........#...###.#.#.
.#.............#............#..
....#..#.............#.#....#..
....#.....#...#...##.#.........
..#...#...#..................#.
........#....#.....#...........
.....##.......#...#.#..#..#....
...#............#..#.#.........
......................#........
....#......#.....#.#....#......
.....#..#.........#.........##.
...............#.....#....##...
...#.#.#...#..#...........#....
.#....###......##...#.#.#.#....
.....#...#....####....##.......
..#......#..#.....##.#...#.....
...#.##..#....#..##.....#......
..#......#...#...##.....#...#..
......#.....#........#.........
..#.#....#..............##....#
..#...#......##............#...
.##.#.......#.......#......#..#
...##.##...#.....#.......#..#..
......##..#....#.......#.......
.....#..#..#.#.....#.....#...##
##.#...#.#.#.....#...#.#.#.##.#
...................###...#..#..
.#.....##.#......#........#....
.##...##.#..........#...#....#.
......#..............#.#......#
...#.......#..#...........#....
.###...#............##..#...##.
##..#.#.........#............#.
#...#.#......#.##...........#.#
.#.#...#........#......##......
....#...#...#.....#...#....#...
...##...........##.........#...
.........#...#..###............
..#........#...............#...
.............#....#.#..........
........#......#.#.......#....#
.................#....##.#.##..
..#...##........#..............
#..#........#...#....#.........
......#.#.....#.....#..###.#..#
....#............#...#.#.#.....
............#..........#...#...
..........#....##.#.........#..
..............#...#...#..#.....
#......#....#..##....#......##.
...#....#.................#....
.#.##.............#...#....##..
....#..#.........#..#....#....#
..#.....##..#......#.#..#......
..#..#.....#........#...#..#..#
.........##.#.##.#.......#....#
..#.......##.##...#.....#.....#
.............##...#...........#
..#......#..#....#...#..#.##...
....#........#......#.........#
.......#........#..#.#.#..##..#
..#......#...........##...#....
.....#..#.#...#..............##
.#..#......#......#........#..#
...##...............#....#.....
.......#...#.......##..#.......
.....#....#...#...#..#.....#.#.
...#.........#.....#...........
...#.....###....#....#...#...#.
#..#.....#.........#.........#.
.................#.#.....#....#
...........#..........#..#.....
........#.#....#...#..#.....###
#............................#.
..##..#..#...##.........#......
......##....#.#...#.........#..
......#..##.#......#..#.....#..
...#.......##....#.#....#......
.....#........#...#............
#.......#...#.........#......#.
......#......#....#..#.........
..#.#........#..#......#....#..
.#..#.#..........##....###.#..#
...#....#.##..#...#....#.......
..#.....#......#.###.......#...
..............................#
.....#..#...#...........#......
.##...#....##....#.#.#.#....#.#
.#...#....#...#........#.......
....#............#...##..#.....
....##..#....#....#.....#....##
.............#..##.#.#.#.......
#.......#.#.#.......#..#..#....
#..#...........#.......###..#..
.#..##.#.....#........#........
..#.#.......#............#..#..
...........#..#............##.#
.....#.......#.....#..#.##.#..#
......#......##.....##.........
..##.#..#.#..#..#..............
.....#.............##...#.#.##.
.#......##.#..........#........
..#..#.........#.....#.#.#.....
..#.....#.......#.....#..#.....
#.#.#........#.#...#....#..#...
.#.#.......#............#....#.
......#..................#....#
.#...#...#.....#.#..........#..
.#..##....####...........#.#...
..##.....#...#.#....#....#.....
#.....................#....#.#.
###..###.#.#...........#.....##
......#......#..........#......
...#......#.##.....#......###.#
.............#..#.#...........#
..#.............#.#..#.....#...
...#...............#....##...##
........#.................#....
#..###.....#.......##.#......##
....#.#..............#.........
#..........#.....#..##...#.....
................#...#..#....#..
..#...#....##..........#.#.....
......#........##......#..#...#
...#....#..#.....#.......#...#.
.#.....#..#...#..###....#......
....#.........#....#.#.#.....#.
#.#....#...#....#.....#..##....
.......#..#..#..........#...#..
..#.#..#.....##.#.#............
..#....#.....#..##..#..#.#..#..
..#.##.#...........#...#..#....
.........#........#...#........
..#.#.#.......##.........#.##..
#.#..........#.#...#..#......##
.#..#....................#.#...
.##......#................#...#
..##.#######......#....#.......
....#...##.#....#.#............
.##....#...##.......#...#..#...
...........#...#...#...#..#....
#...#.....#.......#....#.....#.
.............#.................
........#.#.......#...#.#.#....
..............#............#.#.
......#......##..#.......#....#
##...#..................#......
.....#......###.....#.......#.#
.....#.#............#.#........
..#.#..#............#....#.#...
##.#.###.#.#.#..#......#.......
...##........#..#.....#.#.#..#.
##......#.##.....####..#.......
............#...#..#...#..#....
...#..#................##.#..#.
.#....#.#...........##.#.#...#.
####..#...........#.......###..
.......#.................#.....
.......#....#.......##....#....
..#.........#...#....#.........
..........#..#...#.#...##..#...
....##..........#.........##...
#.........##..#.#..#.......#...
.#...........#....#...#...#.#..
....#..#.....#...##....#.#....#
.#....#.....#......#..##.##.#.#
#......#..#.......##...........
...#..#...#.#.................#
......#.......##....##.#......#
....#....#.#.#.....#....#....#.
..#..........#.##...##..#......
...#..#........#....#.#..#....#
##.......#........#..........#.
.#........#.......#...#..##...#
..#..#..##..#...........#...###
..#......#..........#..##......
.#.....#..#.#...#...#.........#
#.#......##....................
#...#.....##...........#.......
........#...#....#.......##....
...#.##...#....#....#..#..#..#.
...#..#......##....#..#..##....
#...#..........#.#.............
##..#........##.....#.........#
.....#......#.#...###..#.......
#..##.#..#.###...........##..#.
.....#....#..........#.......#.
##.........##.#................
....#.........#............##..
.......#........#......#..#..##
.#...#...##..#....#..#.........
.............#...#.#........#..
......#..#...#..#.###..#.......
........##.#..#.#..#..#........
#.##..#..#..........#...##..###
.##...#............#.#...##..#.
................#....##.#...#..
#.................#..........#.
...#..#..#.....................
..#...##.#.#...................
.....#...#.......#............#
..#..#.........#..##.#..#.#...#
.....#.#.....#.#.......#.....#.
..................#..#....#.#..
..#.....###.##.......##....#.#.
..#......##.......#....##.#....
....#...................#..##.#
.......#....#.##.#.......#....#
..#...#......#..#...###....#.#.
..#..#.#....#...........#.....#
.....#..#..#.......#........#..
......#.##.#......#...........#
#...#....#.#..##.##..#..##.....
#...##....#.#...##........#....
..##............#.#.#..........
....#.....#.#..#.......#..#....
#..#.#.....#..#..##...#..##....
...##........#...........#...#.
.####......#..##.........#.#...
.......#.......................
.................#....#..#.....
.........##......###...........
.##......#.#.#....#.#...#..###.
....#......##.###.#.#..#.......
..........#.......##......##..#
...........#.......#..##.......
.....###..#..............##....
........##..#.#.#......#....#..
#....#.........................
...........#...............##..
......#.................#......
.....#...#..##...##...#...#....
..........#.#...##.####......#.
..#.#.....##....#...........#..
..........#....#..#....##...#..
.#.......#..##...#...#.....#...
...##....#.#......##...##....#.
#.......#.......#.##.#...#.#...
#...#..................#......#
..#.......#...............#..##
#.....#..................#....#
.##.....#.....#......####.....#
..#........#...#.#........#...#
..##.....#....#...#...........#
..#..#.....##..#.##...#........
..........###..#....##.....#...
...#...#....#.##.#...#.#.......
..##......#.......#.......##...
............#............#.....
.##....#.........#.............
....#....#....#........##...#.#
.......##......................
..........#.#.................#
......##.#...#.........#.....#.
..#...#......#..#.............#
..........###.#..#.#...#..#..#.
#..#.#..#....##...#...#.#...#..
.#........##...#......#.##.....
...###.#...##..............##..
#.#.#...#...#..#....#.#..#.....
.#.#.##..#....#......#.#.......
...#..#.#....##...........#..#.
.....##..##......#.#...........
......#.....#....####....#.....
.#.#.#...#..#..#...........#...
.....#......................#..
.........#.........#.###.##....
.....#......##..........#......
..#...........##...........#...
..............#.........#.....#
..#....#..#...#...##.#.........
.#.#.#....#..........#.........`

console.log(findTrees(text))