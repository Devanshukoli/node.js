# What exactly is synchronous and asynchronous?

- **Synchronous** and **asynchronous** are terms used to describe the order and timing of events in a program.

## Synchronous

- In **synchronous** programming, a program performs operations in a sequential and blocking manner. This means that when a program makes a request, it waits for a response before moving on to the next operation. In other words, the program's execution is synchronized with the completion of each operation.
- **Synchronous** programming is also known as blocking programming. This is because the program blocks the execution of additional JavaScript in the Node.js process until the current operation completes.
- **Synchronous** programming is the default mode in which Node.js runs JavaScript code. This means that when you write a Node.js program, it will be executed in a **synchronous** manner unless you explicitly choose to use a non-blocking approach.
- A common example of **synchronous** programming is a function that calculates the sum of two numbers. When this function is called, it blocks the program's execution until the sum is calculated and returned.

**TL;DR** :

- _Synchronous_ is when two tasks cannot execute simultaneously, and must execute one after another. This is because the second task cannot start until the first task has finished.

## Asynchronous

- **asynchronous** programming allows a program to execute operations in a non-blocking manner. When a program makes a request, it does not wait for a response before moving on to the next operation. Instead, it registers a callback function to be executed when the response is ready.
- This means that the program's execution is not synchronized with the completion of each operation, and it can continue performing other tasks in the meantime.
- a common example of **asynchronous** programming is a function that retrieves data from a server. When this function is called, it registers a callback function to be executed when the data is available, and the program continues executing other tasks in the meantime.

**TL;DR** :

- _Asynchronous_ is when two tasks can execute simultaneously, without having to wait for one another to finish. This is because the second task does not have to wait for the first task to finish.

## Which is needed?

- The choice between using synchronous or _asynchronous_ programming depends on the requirements of the program and the nature of the tasks being performed.
- Synchronous programming can be simpler to implement and understand, but it can lead to performance issues if operations take a long time to complete.
- _Asynchronous_ programming, on the other hand, can be more complex to implement, but it can lead to better overall performance by allowing the program to continue executing other tasks while waiting for operations to complete.

# What exactly is blocking and non-blocking?

- **Blocking** and **non-blocking** are terms used in computer science to describe how a program handles requests or operations.

## Blocking

- _Blocking_ is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.
- A common example of a blocking operation is a file read. When a file read is performed, the process must wait until the file is accessed and read before continuing.
- **Blocking** is the default mode in which Node.js runs JavaScript code. This means that when you write a Node.js program, it will be executed in a blocking manner unless you explicitly choose to use a non-blocking approach.
- **Blocking** is also known as **synchronous** programming. This is because the program blocks the execution of additional JavaScript in the Node.js process until the current operation completes.

## Non-Blocking

- _Non-blocking_ refers to a situation where a program can continue executing while waiting for an operation to complete.
- When a non-blocking operation is requested, the program is able to move on to the next task while waiting for the operation to finish. This means that the program is not "blocked" and can perform other operations in the meantime.

# Now, What is the Difference between Sync/Async & Blocking/Non-blocking?

- Synchronous and asynchronous, as well as blocking and non-blocking, are related but distinct concepts in programming.

- Synchronous and asynchronous refer to the **order and timing of events in a program**. In synchronous programming, operations are performed in a blocking and sequential manner, meaning that the program waits for a response before moving on to the next operation. In asynchronous programming, operations are performed in a non-blocking and parallel manner, meaning that the program can continue executing other tasks while waiting for a response.

- Blocking and non-blocking, on the other hand, refer to the **behavior of an operation in relation to the program's execution**. A blocking operation blocks the program's execution until it completes, while a non-blocking operation does not block the program's execution and allows it to continue performing other tasks.

- In practical terms, synchronous programming often uses blocking operations, while asynchronous programming often uses non-blocking operations. However, it's important to note that synchronous programming can also use non-blocking operations (although they are less common), and asynchronous programming can use blocking operations (although they are generally avoided due to their potential impact on performance).

- The choice between synchronous and asynchronous programming, as well as blocking and non-blocking operations, depends on the specific requirements of the program and the nature of the tasks being performed. Synchronous programming is often simpler to understand and implement, but can lead to performance issues if operations take a long time to complete. Asynchronous programming can be more complex to implement, but can lead to better performance by allowing the program to continue executing other tasks while waiting for responses. Similarly, blocking operations are often simpler to implement, but can lead to performance issues, while non-blocking operations can be more complex to implement, but can lead to better performance by allowing the program to continue executing other tasks.


# 
