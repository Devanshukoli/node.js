# What is single threaded and multiple threaded?

- Single threaded and multiple threaded refer to _how a program handles the execution of code in relation to threads_, which are independent sequences of instructions that can be scheduled for execution by the operating system.

- In a single threaded program, there is only one thread of execution. This means that the program performs operations in a sequential manner, _one at a time_, and can only perform one task at a time. If the program needs to perform multiple tasks simultaneously, it must switch between them, which can lead to performance issues if the tasks are time-consuming.

- In contrast, in a multiple threaded program, there are multiple threads of execution. This means that the program can perform multiple tasks simultaneously _by assigning each task to a separate thread_. This allows the program to take advantage of multiple processor cores and can lead to better performance.

- However, multiple threaded programming can also be more complex to implement and can introduce issues such as _race conditions_, _deadlocks_, and _thread safety_.

- The choice between single threaded and multiple threaded programming depends on the specific requirements of the program and the nature of the tasks being performed. Single threaded programming is often simpler to understand and implement, but can lead to performance issues if the program needs to perform multiple tasks simultaneously. Multiple threaded programming can lead to better performance, but can also be more complex to implement and can introduce additional issues that need to be carefully managed.

**TL;DR** :

- Single threaded means that only one task can be executed at a time. In other words, only one instruction can be executed at a time. This is the default behavior of JavaScript.
- Multiple threaded means that multiple tasks can be executed at a time. In other words, multiple instructions can be executed at a time. This is the default behavior of C++.

# What is event loop?

# What is callback?

# What is event emitter?

# What is promise?

# What is async await?
