**Add your own guidelines here**
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized


Original Prompts:
1. I want to create a curriculum website to teach basic coding and computer science.

2. Good first draft! I would like a few changes. Can the name be changed to "AdasAcademy" from what it is now? And mainly, can the outline follow my own? I will paste my current outline for what I have on Programming Basics. This section is currently in Python, and I would love to eventually have it doable in multiple languages

3. In this, each '-' will be a subsection. Any additional '-', such as '--' would be a sub-subsection. I have all the necessary content and I will add it in. I just want an outline of what the website would look like, with NO additional content. For the "Activity" sections, I would love a place for the user to interact and test small snippets of code in Python, but do not worry about what the actual activity is. Again, only want an outline. Section 0 - Download an IDE
Section 1 - Introduction and Programming Basics
- What is programming? - What are we doing? - How do computers even work?
-- What’s the difference between Comp Sci and programming?
-- What is an algorithm?
-- How does any code we write… work (roughly)?
-- Why learn programming?
- Why are we doing Python? Differences, Pros/Cons of both
-- What is a programming language? What are some different ones?
-- What is Python?
-- What is C++?
-- What are some popular things that use these two?
-- Why Python? Pros and cons of both
--- Pros Python
--- Cons Python
--- Pros C++
--- Cons C++
-- Other languages and why I don’t want to teach them
- Variables/Data Types
-- Basics
-- Collections
-- Miscellaneous
-- Example Data Type Table
-- Declaring Variables
-- Constants
-- Reserved Words
-- Type Casting (Changing Variable Types)
-- Variable Names
- Breaking Down Basic “Hello World” in Both Languages
-- C++
-- Python
- Scope
-- Global Variable
Section 2 - Writing Basic Programs
- Operators: Arithmetic, Logical, and Conditional
-- Logical Operators
--- A Short Detour in Logic
---- And
---- Or
---- Not
-- Arithmetic Operators
--- Addition, Subtraction, Multiplication, and Division
--- Floor (int) Division
--- Modulus
--- Exponentiation
--- Shortcuts
-- Conditional Operators
- If-statements
- Loops
-- While Loops
-- For Loops
--- Range
-- Break
-- Continue
-- Else
- Activity
- Reading in an input
- Escape Characters
- Debugging (the “Lazy Way”)
-- What is Debugging?
-- The lazy way
-- Example
-- Why teach the lazy way first
-- The correct way
- Activity
Section 3 - Functions
- What is a function?
- Why do we use it/How is it useful?
- Syntax
- Parameters
-- Default Parameter Values
- Calling Functions For Other Functions
-- Bonus: Recursion
- Good Commenting/Coding Practice
Activity
Section 4 - Collections (lists, tuples, sets, dictionaries)
- List
-- Accessing Items in a List
--- Index
--- Negative Index
--- Range of Indices
-- Strings and String Manipulation
--- Notable String Methods
- Tuple
- Set
- Dictionary
Section 5 - Structs, Classes, and Objects
- Structs
- Classes
- Objects
Section 6 - Using External Sources
- File Input
- Library Imports
-- Math
- Reading Documentation

4. Can you add the following: "Section 0 - Download VS Code
Visual Studio Code (abbreviated as VS Code) is a program people use to write code. Many programmers use VS Code for how many different languages it can support and the many useful features it has for developers. 

There are other alternatives for where people write their code. Some people use a code/text editor (technically different terms but they are used interchangeably by many people) with less features that are less intensive for the computer. The other alternative is an IDE (Integrated Development Environment) which has more features. For now it’s important to know that an IDE can write and run code and a code/text editor can only write. 

We use a text editor or IDE over something like a word document because it can easily help format the code for the computer to read. It can also underline any spelling/syntax errors in your code. At first these are really the main advantages, but as you begin to work with full-fledged applications, the benefits start to shine much greater.
 
VS Code is technically a text editor, but because of all its extra features and plugins, it is very easy to create a running code environment.

For right now, as a true beginner, the main advantages of VS Code won’t be apparent. Again, to be very honest, you can get away with using any text editor or IDE at this point. However, so many people use VS Code that any questions about it are easy to answer with quick searches. Also, as you learn more about programming and software development as a whole, its features start to become more useful and you might see why I recommend it. 

Here is the link to their website again for downloading on Windows."


5. As for the structure of the content in terms of directories. Is there a way to make this more modular, and have the content of each lesson in its own file? It feels incorrect that all of my content would be in a single .ts file. The subsections in each lesson can stay in whichever file it is associated with. However, making it more modular I think will help with organization.


-->
