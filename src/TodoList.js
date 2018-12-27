import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from './store/actionTypes';

import 'antd/dist/antd.css';

import { Input, Button, List } from 'antd';

const TodoList = (props) => {

  const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = props;

  return (
    <div>
      <div style={{ marginRight: '10px', marginTop: '10px', marginLeft: '10px' }}>
        <Input
          style={{ width: '300px' }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          type="primary"
          onClick={handleBtnClick}
        >
          提交
        </Button>
      </div>

      <List
        style={{ width: '300px', marginLeft: '10px', marginTop: '10px', cursor: 'pointer' }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (<List.Item onClick={() => { handleItemDelete(index) }}>{item}</List.Item>)}
      />

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value,
      }
      dispatch(action);
    },

    handleBtnClick() {
      const action = {
        type: ADD_ITEM,
      }

      dispatch(action);
    },

    handleItemDelete(index) {
      const action = {
        type: DEL_ITEM,
        index
      }

      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
