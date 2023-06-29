// let str = 'brace';
// let ste1: string;
// let num = 1000;
// let a = null;
// let b = undefined;
// let c: any = true;
// let arr: string[] = ['a','b']
// let arr2: string[][] = [['a','b'],['a']]
// let tuple: [number, string, boolean] = [1, 'a', true]
// interface Card {
//     name: string,
//     age?: number
// }
// type Card2 = {
//     line1: string
//     line2: string
// }
// enum Livestatus {
//     STREAMING = 1,
//     SUCCESS = 0,
//     FAIL = -1
// }
// const card1: Card ={
//     name: 'dawn',
//     age: 20,
// }
// const func2 = () =>{
//     return 1
// }
// //-----unknow-----
// type Data = {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }
// async function getData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await res.json() as Data
// }
// const data1: Data = {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
// }
// type Beta = {
//     name: string
// }
// const beta  = data1 as unknown as Beta
// class Live {
//     roomName: string
//     private id: string
//     protected name: string
//     constructor (roomName1: string, id1: string, name1: string){
//         console.log("Streaming...");
//         this.roomName = roomName1
//         this.id = id1
//         this.name = name1
//     }
// }
// class CarLive extends Live {
//     constructor (roomName1: string, id1: string, name1: string){
//         super(roomName1, id1, name1)
//     }
//     start() {
//         super.name
//     }
// }
// const live = new CarLive('No.2', '000002', 'dawn2')
// const live1 = new Live('No.1', '000001', 'dawn')
// console.log(live)
// class Live2 {
//     #name
//     constructor (name: string) {
//         this.#name = name
//     }
// }
// interface CarProps {
//     name: string
//     age: number
//     start: () => void
// }
// class Car implements CarProps {
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     start( ) {
//     }
// }
// function h4(name: string, age?: number) {
//     if (age === undefined) return -1
// }
// const live2 = new Live2('live2')
// console.log(live2)
// function print<T> (data: T) {
//     console.log(data)
// }
// print<string>("wwe")
// print<number>(999)
// class Print<T> {
//     data: T
//     constructor(d: T){
//         this.data = d
//     }
// }
// const p = new Print<number>(999)
// const p1 = new Print<string>('999')
// console.log('p',p)
// console.log('p1',p1)
// interface CatInfo {
//     age: number;
//     breed: string;
// }
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    Graph.prototype.addVertex = function (vertex) {
        this.adjacencyList.set(vertex, []);
    };
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        var _a, _b;
        (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
        (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push(vertex1);
    };
    Graph.prototype.bfs = function (startVertex) {
        var visited = new Set();
        var queue = [];
        visited.add(startVertex);
        queue.push(startVertex);
        while (queue.length > 0) {
            var currentVertex = queue.shift();
            var neighbors = this.adjacencyList.get(currentVertex);
            for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                var neighbor = neighbors_1[_i];
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return Array.from(visited);
    };
    return Graph;
}());
// 測試程式碼
var graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
var result = graph.bfs(0);
console.log(result);
