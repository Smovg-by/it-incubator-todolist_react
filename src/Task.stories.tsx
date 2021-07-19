import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Task, TaskPropsType } from './Task';

export default {
  title: 'Todolist/Task',
  component: Task,
} as Meta

const changeTaskStatusCallback = action("Status changed inside Task")
const changeTaskTitleCallback = action("Title changed inside Task")
const removeTaskCallback = action("Remove button inside Task is clicked")

const Template: Story<TaskPropsType> = (args: TaskPropsType) => <Task {...args} />

const baseArgs = {
  changeTaskStatus: changeTaskStatusCallback,
  changeTaskTitle: changeTaskTitleCallback,
  removeTask: removeTaskCallback,
}

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
  ...baseArgs,
  task: { id: '1', isDone: true, title: "JS" },
  todolistId: 'todolistId1'
}

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
  ...baseArgs,
  task: { id: '1', isDone: false, title: "JS" },
  todolistId: 'todolistId1'
}