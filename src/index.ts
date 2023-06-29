class Graph {
    private adjacencyList: Map<number, number[]>;
  
    constructor() {
      this.adjacencyList = new Map<number, number[]>();
    }
  
    addVertex(vertex: number): void {
      this.adjacencyList.set(vertex, []);
    }
  
    addEdge(vertex1: number, vertex2: number): void {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1);
    }
  
    bfs(startVertex: number): number[] {
      const visited: Set<number> = new Set<number>();
      const queue: number[] = [];
  
      visited.add(startVertex);
      queue.push(startVertex);
      
      while (queue.length > 0) {
        const currentVertex = queue.shift()!;
        console.log(currentVertex);
        const neighbors = this.adjacencyList.get(currentVertex)!;
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
          
        }
      }
  
      return Array.from(visited);
    }
    dfs(startVertex: number): number[] {
        const visited: Set<number> = new Set<number>();

        this.dfsRecursive(startVertex, visited);

        return Array.from(visited);
      }
    private dfsRecursive(vertex: number, visited: Set<number>): void {
        visited.add(vertex);
    
        const neighbors = this.adjacencyList.get(vertex)!;
    
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            this.dfsRecursive(neighbor, visited);
          }
        }
      }
  }
  
  // 測試程式碼
  const graph = new Graph();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  graph.addVertex(5);
  graph.addVertex(6);
  graph.addVertex(7);

  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 5);
  graph.addEdge(3, 5);
  graph.addEdge(4, 6);
  graph.addEdge(5, 7);
  graph.addEdge(6, 7);
  
  
  const result = graph.bfs(1);
  console.log(result);