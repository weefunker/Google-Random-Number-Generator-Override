import React, { useRef, useState, useContext } from 'react';

import {
  Item,
  ContentContainer,
  Content,
  DeleteButton,
  Grabber
} from './styles';

import { TargetListContext } from '../../TargetListContext';

const ListItem = ({ value, id, index }) => {
  const [targets, setTargets] = useContext(TargetListContext);

  const contentInput = useRef(null);
  const [inputContent, setInputContent] = useState(value);
  const [editable, setEditable] = useState(false);

  const updateTarget = () => {
    const updatedTargets = targets.map((target) => {
      if (target.id === id) {
        return {id, value: inputContent};
      } else {
        return target;
      }
    })

    setTargets(updatedTargets);
    setEditable(false);
  }

  const removeTarget = () => {
    const filteredTargets = targets.filter((target) => target.id !== id);

    setTargets(filteredTargets);
  }

  const toggleInlineEdit = () => {
    setEditable(true);
    contentInput.current.focus();
  }

  const updateInput = (event) => {
    const inputValue = event.target.value;
    setInputContent(inputValue);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    updateTarget();
  }

  return (
    <Item>
      <Grabber />
      <ContentContainer onSubmit={handleFormSubmit}>
        <Content
          ref={contentInput}
          value={inputContent}
          readOnly={!editable}
          onBlur={updateTarget}
          onChange={updateInput}
          onDoubleClick={toggleInlineEdit}
        />
      </ContentContainer>
      <DeleteButton onClick={removeTarget} />
    </Item>
  )
}

export default ListItem;
