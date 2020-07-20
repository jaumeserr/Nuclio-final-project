import React from 'react';
import {useParams} from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  return (
    <div>ID: {id}</div>
  )
};

export default Board;