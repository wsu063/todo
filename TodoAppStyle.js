import { StyleSheet } from 'react-native';
const TodoAppStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#0B3861',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoList: {
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
    marginLeft: 10,
  },
  completedText: {
    fontSize: 18,
    marginLeft: 10,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    marginLeft: 'auto',
    backgroundColor: '#8A0808',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default TodoAppStyle;