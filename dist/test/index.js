"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
let str = 'brace';
let ste1;
let num = 1000;
let a = null;
let b = undefined;
let c = true;
let arr = ['a', 'b'];
let arr2 = [['a', 'b'], ['a']];
let tuple = [1, 'a', true];
var Livestatus;
(function (Livestatus) {
    Livestatus[Livestatus["STREAMING"] = 1] = "STREAMING";
    Livestatus[Livestatus["SUCCESS"] = 0] = "SUCCESS";
    Livestatus[Livestatus["FAIL"] = -1] = "FAIL";
})(Livestatus || (Livestatus = {}));
const card1 = {
    name: 'dawn',
    age: 20,
};
const func2 = () => {
    return 1;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
const beta = data1;
class Live {
    constructor(roomName1, id1, name1) {
        console.log("Streaming...");
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
}
class CarLive extends Live {
    constructor(roomName1, id1, name1) {
        super(roomName1, id1, name1);
    }
    start() {
        super.name;
    }
}
const live = new CarLive('No.2', '000002', 'dawn2');
const live1 = new Live('No.1', '000001', 'dawn');
console.log(live);
class Live2 {
    constructor(name) {
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() {
    }
}
function h4(name, age) {
    if (age === undefined)
        return -1;
}
const live2 = new Live2('live2');
console.log(live2);
function print(data) {
    console.log(data);
}
print("wwe");
print(999);
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print(999);
const p1 = new Print('999');
console.log('p', p);
console.log('p1', p1);
// class Graph {
//     private adjacencyList: Map<number, number[]>;
//     constructor() {
//       this.adjacencyList = new Map<number, number[]>();
//     }
//     addVertex(vertex: number): void {
//       this.adjacencyList.set(vertex, []);
//     }
//     addEdge(vertex1: number, vertex2: number): void {
//       this.adjacencyList.get(vertex1)?.push(vertex2);
//       this.adjacencyList.get(vertex2)?.push(vertex1);
//     }
//     bfs(startVertex: number): number[] {
//       const visited: Set<number> = new Set<number>();
//       const queue: number[] = [];
//       visited.add(startVertex);
//       queue.push(startVertex);
//       while (queue.length > 0) {
//         console.log(queue);
//         const currentVertex = queue.shift()!;
//         console.log(currentVertex);
//         const neighbors = this.adjacencyList.get(currentVertex)!;
//         for (const neighbor of neighbors) {
//           if (!visited.has(neighbor)) {
//             visited.add(neighbor);
//             queue.push(neighbor);
//           }
//         }
//       }
//       return Array.from(visited);
//     }
//     dfs(startVertex: number): number[] {
//         const visited: Set<number> = new Set<number>();
//         this.dfsRecursive(startVertex, visited);
//         return Array.from(visited);
//       }
//       private dfsRecursive(vertex: number, visited: Set<number>): void {
//         visited.add(vertex);
//         const neighbors = this.adjacencyList.get(vertex)!;
//         for (const neighbor of neighbors) {
//           if (!visited.has(neighbor)) {
//             this.dfsRecursive(neighbor, visited);
//           }
//         }
//       }
//   }
//   // 測試程式碼
//   const graph = new Graph();
//   graph.addVertex(1);
//   graph.addVertex(2);
//   graph.addVertex(3);
//   graph.addVertex(4);
//   graph.addVertex(5);
//   graph.addVertex(6);
//   graph.addVertex(7);
//   graph.addEdge(1, 2);
//   graph.addEdge(1, 3);
//   graph.addEdge(1, 4);
//   graph.addEdge(2, 5);
//   graph.addEdge(3, 5);
//   graph.addEdge(4, 6);
//   graph.addEdge(5, 7);
//   graph.addEdge(6, 7);
//   const result = graph.bfs(1);
//   console.log(result);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUNsQixJQUFJLElBQVksQ0FBQztBQUVqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7QUFFbEIsSUFBSSxDQUFDLEdBQVEsSUFBSSxDQUFDO0FBRWxCLElBQUksR0FBRyxHQUFhLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzdCLElBQUksSUFBSSxHQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRXhDLElBQUksS0FBSyxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFZckQsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1gscURBQWEsQ0FBQTtJQUNiLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUFFRCxNQUFNLEtBQUssR0FBUTtJQUNmLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEVBQUU7Q0FDVixDQUFBO0FBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUFDLENBQUE7QUFDWixDQUFDLENBQUE7QUFZRCxTQUFlLE9BQU87O1FBQ2xCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUE7UUFDdkUsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFVLENBQUE7SUFDekMsQ0FBQztDQUFBO0FBSUQsTUFBTSxLQUFLLEdBQVM7SUFD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