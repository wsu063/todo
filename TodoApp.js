import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './TodoAppStyle';

const TodoApp = () => {
    const [todoItems, setTodoItems] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      // 새로운 Todo 항목 추가
      const addTodo = () => {
          const newTodoItem = { id: Date.now(), text: newTodo, completed: false }
          setTodoItems(todoItems.concat(newTodoItem));
          setNewTodo('');
      };
      // Todo 항목 토글
      const toggleTodo = id => {
        setTodoItems(
          todoItems.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
      // Todo 항목 삭제
      const deleteTodo = id => {
        setTodoItems(todoItems.filter(todo => todo.id !== id));
      };
      // Todo 항목 렌더링
      const renderTodoItem = ({ item }) => (
        <View style={styles.todoItem}>
          <CheckBox
            value={item.completed}
            onValueChange={() => toggleTodo(item.id)}
          />
          <Text style={item.completed ? styles.completedText : styles.todoText}>{item.text}</Text>
          <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>삭제하기</Text>
          </TouchableOpacity>
        </View>
      );
return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="할일을 입력하세요."
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>등록</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todoItems}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id.toString()}
        style={styles.todoList}
      />
    </View>
  );
}



  export default TodoApp