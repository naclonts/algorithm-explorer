import { ADD_NODE } from '../actions'

class Graph {
    constructor(nodes) {
        if (nodes) {
            this.nodes = nodes
        }
        else {
            this.nodes = []
        }
    }
    addNode(node) {
        this.nodes.push(node)
    }
    nodeCount() {
        return this.nodes.length
    }
}

class Node {
    constructor(label) {
        this.label = label
        this.vertices = []
    }

    addVertex(node) {
        this.vertices.push(node)
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
                graph: new Graph([...state.graph.nodes, new Node(state.nextNodeLabel)]),
                nextNodeLabel: state.nextNodeLabel + 1,
            }
        default:
            return state
    }
};

export default graphReducer;

