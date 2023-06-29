let str = 'brace';
let ste1: string;

let num = 1000;
let a = null;
let b = undefined;

let c: any = true;

let arr: string[] = ['a','b']
let arr2: string[][] = [['a','b'],['a']]

let tuple: [number, string, boolean] = [1, 'a', true]

interface Card {
    name: string,
    age?: number
}

type Card2 = {
    line1: string
    line2: string
}

enum Livestatus {
    STREAMING = 1,
    SUCCESS = 0,
    FAIL = -1
}

const card1: Card ={
    name: 'dawn',
    age: 20,
}

const func2 = () =>{
    return 1
}

//-----unknow-----

type Data = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data
}



const data1: Data = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
}

type Beta = {
    name: string
}

const beta  = data1 as unknown as Beta



class Live {
    roomName: string
    private id: string
    protected name: string
    
    constructor (roomName1: string, id1: string, name1: string){
        console.log("Streaming...");
        this.roomName = roomName1
        this.id = id1
        this.name = name1
    }
}



class CarLive extends Live {
    constructor (roomName1: string, id1: string, name1: string){
        super(roomName1, id1, name1)
    }

    start() {
        super.name

    }
}

const live = new CarLive('No.2', '000002', 'dawn2')

const live1 = new Live('No.1', '000001', 'dawn')
console.log(live)

class Live2 {
    #name
    constructor (name: string) {
        this.#name = name
    }
}

interface CarProps {
    name: string
    age: number
    start: () => void
}

class Car implements CarProps {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    start( ) {

    }
}

function h4(name: string, age?: number) {
    if (age === undefined) return -1

}


const live2 = new Live2('live2')
console.log(live2)

function print<T> (data: T) {
    console.log(data)
}
print<string>("wwe")
print<number>(999)

class Print<T> {
    data: T
    constructor(d: T){
        this.data = d
    }
}

const p = new Print<number>(999)
const p1 = new Print<string>('999')
console.log('p',p)
console.log('p1',p1)

interface CatInfo {
    age: number;
    breed: string;
}



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