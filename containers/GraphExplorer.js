import { connect } from 'react-redux';
import { addNode } from '../actions';
import GraphView from '../components/Graph';


const mapStateToProps = state => {
    return {
        graph: state.graph.graph,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNode: () => {
            dispatch(addNode())
        }
    }
}

const GraphExplorer = connect(mapStateToProps, mapDispatchToProps)(GraphView);

export default GraphExplorer;
