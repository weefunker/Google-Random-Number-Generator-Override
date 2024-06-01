import React, { useContext } from 'react';

import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd';

import {
  Container,
  ItemContainer
} from './styles';

import { TargetListContext } from '../../TargetListContext';

import ListItem from '../ListItem';

const List = () => {
  const [targets, setTargets] = useContext(TargetListContext);

  function sortTargets(result) {
    if (!result.destination) return;

    const items = Array.from(targets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTargets(items);
  }

  return (
    <DragDropContext onDragEnd={sortTargets}>
      <Droppable droppableId="targets">
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {targets.map(({id, value}, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <ItemContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <ListItem id={id} value={value} />
                    </ItemContainer>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;