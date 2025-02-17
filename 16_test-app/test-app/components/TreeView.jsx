import React from "react";

// function calculate average age and total salary for each node
const calculateStats = (node) => {
  if (!node.children) {
    return {
      totalSalary: node.salary || 0,
      averageAge: node.age || 0,
      count: node.salary ? 1 : 0
    };
  }

  let totalSalary = 0;
  let totalAge = 0;
  let count = 0;


  
  // recursivvely calculate stats for children
  node.children.forEach((child) => {
    const childStats = calculateStats(child);
    totalSalary += childStats.totalSalary;
    totalAge += childStats.averageAge * childStats.count;
    count += childStats.count;
  });

  return {
    totalSalary,
    averageAge: count > 0 ? totalAge / count : 0,
    count
  };
};

// component a single node in the teree
const TreeNode = ({ node, level = 0 }) => {
  const stats = calculateStats(node);
  const paddingLeft = `${level * 20}px`;

  return (
    <div style={{ paddingLeft, fontFamily: "Arial", marginBottom: "16px"}}>
      <div>
        {node.name} Salary: {stats.totalSalary} Age: {stats.count > 0 ? stats.averageAge.toFixed(1) : "N/A"}
      </div>
      {node.children &&
        node.children.map((child, index) => (
          <TreeNode key={index} node={child} level={level + 1} />
        ))}
    </div>
  );
};

// the main comomnent
const TreeView = ({ data }) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc"  }}>
      {data.map((city, index) => (
        <TreeNode key={index} node={city} />
      ))}
    </div>
  );
};

export default TreeView;

