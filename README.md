# Stack Data Structure Visualizer

An interactive web application that demonstrates the **Stack** data structure and its **LIFO (Last In, First Out)** principle.

## Features

- Push custom values onto the stack
- Pop the top value from the stack
- Peek at the current top value without removing it
- Clear the complete stack
- Automatically push random values at regular intervals
- Display the current size and fixed capacity
- Show `EMPTY`, `FULL`, and automatic-mode status
- Visualize stack overflow and underflow messages
- Responsive layout for desktop and mobile screens

## Demo

Open `stack.html` in a modern web browser to use the visualizer.

## How to Run

No installation or build tools are required.

1. Download or clone this repository.
2. Open `stack.html` directly in a web browser.
3. Enter a value and select **Push** to add it to the stack.

You can also serve the folder with any local static web server if preferred.

## Controls

| Control | Description |
| --- | --- |
| **Push** | Adds the entered value to the top of the stack |
| **Pop** | Removes the top value |
| **Peek** | Displays the top value without removing it |
| **Start Auto Random** | Automatically adds random three-digit values |
| **Clear** | Removes all values from the stack |

Press **Enter** in the value field to push a value.

## Stack Rules Demonstrated

The visualizer uses the following stack operations:

- **Push:** Insert an element at the top.
- **Pop:** Remove the most recently inserted element.
- **Peek:** Read the top element without removing it.
- **isEmpty:** Check whether the stack contains no elements.
- **isFull:** Check whether the stack has reached its capacity.

The stack capacity is fixed at **8 elements**. Trying to push into a full stack displays a stack overflow message. Trying to pop from an empty stack displays a stack underflow message.

## Project Structure

```text
.
├── stack.html                 # Application structure and controls
├── stack.css                  # Styling, layout, and animations
├── stack.js                   # Stack operations and UI behavior
└── innovative assignment 2.pdf # Assignment reference document
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Learning Objectives

This project provides a visual demonstration of:

- LIFO ordering
- Stack insertion and deletion
- Overflow and underflow conditions
- Array-based stack implementation
- DOM manipulation and event handling
- Responsive user-interface design

## License

This project is licensed under the **MIT License**.
