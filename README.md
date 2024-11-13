### TypeScript Context Exercise

This project is a simple exercise in using React’s `useContext` and TypeScript for state management. It’s designed to explore global state management in a straightforward way as part of a TypeScript learning journey. Given the project’s simplicity, `useContext` is sufficient to meet its needs, allowing for a focused, lightweight approach to state management.

To optimize performance, the project also leverages `React.memo` to minimize unnecessary re-renders, making component updates more efficient. Additionally, accessibility is enhanced through ARIA attributes such as `aria-label`, ensuring that the interface is accessible to users with assistive technologies.

> **Note**: In more complex, real-world applications, scalable state management solutions like Redux, Zustand, or Recoil are generally more appropriate than `useContext`.