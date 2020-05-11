import { ADD_NODE } from '../actions'


const NODE_STATE = {
    undiscovered: 'undiscovered',
    discovered: 'discovered',
    completelyExplored: 'completelyExplored',
};

class Graph {
    constructor(nodes=[], exploreQueue=[]) {
        // These arguments make a _shallow_ copy of the graph
        // Todo: Maybe deep clone the nodes?
        this.nodes = nodes;
        this.exploreQueue = exploreQueue;
    }

    addNode(node, nodeLabel) {
        return new Graph(
            [...this.nodes, new Node(nodeLabel)],
            this.exploreQueue,
        );
    }

    nodeCount() {
        return this.nodes.length;
    }
}

class Node {
    constructor(label, copyFrom=null) {
        this.label = label;
        this.vertices = copyFrom ? copyFrom.vertices : [];
        // properties for BFS / DFS traversal
        this.state = copyFrom ? copyFrom.state : NODE_STATE.undiscovered;
        this.parent = copyFrom ? copyFrom.parent : null;
    }

    addVertex(node) {
        let newNode = new Node(this.label, this);
        newNode.vertices = [...newNode.vertices, node];
        return newNode;
    }
}


const INITIAL_STATE = {
    graph: new Graph(),
    nextNodeLabel: 0,
};

const graphReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NODE:
            return {
                ...state,
                graph: state.graph.addNode(),
                nextNodeLabel: state.nextNodeLabel + 1,
            }
        default:
            return state
    }
};

export default graphReducer;

