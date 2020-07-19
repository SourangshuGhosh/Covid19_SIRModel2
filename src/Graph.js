import React, { Component } from "react";

import {
  forceSimulation,
  forceLink,
  forceCollide
} from "d3-force";

import Node from "./Node";

export default class Graph extends Component {
  constructor(props) {
    super(props);

    this.handleTick = this.handleTick.bind(this);
    this.setCurrent = this.setCurrent.bind(this);

    this.state = {
      current: null,
      layout: props.nodes.reduce(
        (prev, acc) => (
          (prev[acc.id] = {
            x: 0,
            y: 0
          }),
          prev
        ),
        {}
      )
    };
  }

  componentDidMount() {}

  componentWillMount() {
    this.runForceSimulation();

    this.simulation.on("tick", this.handleTick);
  }

  componentWillUnmount() {
    this.simulation.on("tick", null);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tick !== nextProps.tick) {
      this.updateForceSimulation();
    }
  }

  updateForceSimulation() {
    this.simulation.alpha(0.2).restart();
    this.simulation.nodes(this.props.nodes);
    this.simulation.force("link").links(this.props.edges);
  }

  shouldComponentUpdate(props, nextProps) {
    return props.tick !== nextProps.tick;
  }

  runForceSimulation() {
    const { nodes, edges } = this.props;

    const simulation = (this.simulation = forceSimulation(nodes)
      .force(
        "link",
        forceLink().id(node => node.id)
      )
      .force(
        "collide",
        forceCollide(() => 1)
          .iterations(1)
          .radius(9)
      ));

    simulation
      .force("link")
      .links(edges)
      .distance(25);
  }

  handleTick() {
    const { simulation } = this;
    const { layout } = this.state;
    let updates = {};

    simulation.nodes().map(node => {
      updates[node.id] = node;
    });

    this.setState({
      layout: {
        ...layout,
        ...updates
      }
    });
  }

  setCurrent(nodeId) {
    return () => {
      this.setState({
        current: nodeId
      });
    };
  }

  render() {
    const { nodes, edges, width, height, onNodeClick } = this.props;
    const { layout, current } = this.state;
    return (
      <svg
        width={width}
        ref={ref => (this.svgRef = ref)}
        height={height}
        style={{
          shapeRendering: "geometricPrecision"
        }}
      >
        {nodes.map((node, index) => (
          <Node
            key={index}
            node={node}
            layout={layout}
            current={current}
            width={width}
            height={height}
            onNodeClick={onNodeClick}
            {...node}
          />
        ))}
      </svg>
    );
  }
}

Graph.defaultProps = {
  width: 900,
  height: 600,
  nodes: [],
  edges: []
};
