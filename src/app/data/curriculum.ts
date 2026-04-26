import { Section } from "./types";

// Section 0
import { downloadVsCode } from "./lessons/section-0/download-vs-code";

// Section 1
import { whatIsProgramming } from "./lessons/section-1/what-is-programming";
import { whyPython } from "./lessons/section-1/why-python";
import { variablesDataTypes } from "./lessons/section-1/variables-data-types";
import { helloWorld } from "./lessons/section-1/hello-world";
import { scope } from "./lessons/section-1/scope";

// Section 2
import { operators } from "./lessons/section-2/operators";
import { ifStatements } from "./lessons/section-2/if-statements";
import { loops } from "./lessons/section-2/loops";
import { activity1 } from "./lessons/section-2/activity-1";
import { readingInput } from "./lessons/section-2/reading-input";
import { escapeCharacters } from "./lessons/section-2/escape-characters";
import { debugging } from "./lessons/section-2/debugging";
import { activity2 } from "./lessons/section-2/activity-2";

// Section 3
import { whatIsFunction } from "./lessons/section-3/what-is-function";
import { whyUseFunctions } from "./lessons/section-3/why-use-functions";
import { syntax } from "./lessons/section-3/syntax";
import { parameters } from "./lessons/section-3/parameters";
import { callingFunctions } from "./lessons/section-3/calling-functions";
import { goodPractice } from "./lessons/section-3/good-practice";
import { activity3 } from "./lessons/section-3/activity-3";

// Section 4
import { list } from "./lessons/section-4/list";
import { tuple } from "./lessons/section-4/tuple";
import { set } from "./lessons/section-4/set";
import { dictionary } from "./lessons/section-4/dictionary";

// Section 5
import { structs } from "./lessons/section-5/structs";
import { classes } from "./lessons/section-5/classes";
import { objects } from "./lessons/section-5/objects";

// Section 6
import { fileInput } from "./lessons/section-6/file-input";
import { libraryImports } from "./lessons/section-6/library-imports";
import { readingDocumentation } from "./lessons/section-6/reading-documentation";

export const curriculum: Section[] = [
  {
    id: "section-0",
    title: "Section 0 - Download VS Code",
    description: "Getting your development environment ready",
    icon: "Download",
    color: "bg-blue-500",
    lessons: [downloadVsCode],
  },
  {
    id: "section-1",
    title: "Section 1 - Introduction and Programming Basics",
    description: "Foundational concepts of programming",
    icon: "BookOpen",
    color: "bg-purple-500",
    lessons: [
      whatIsProgramming,
      whyPython,
      variablesDataTypes,
      helloWorld,
      scope,
    ],
  },
  {
    id: "section-2",
    title: "Section 2 - Writing Basic Programs",
    description: "Learn to write functional programs",
    icon: "Code",
    color: "bg-green-500",
    lessons: [
      operators,
      ifStatements,
      loops,
      activity1,
      readingInput,
      escapeCharacters,
      debugging,
      activity2,
    ],
  },
  {
    id: "section-3",
    title: "Section 3 - Functions",
    description: "Creating reusable blocks of code",
    icon: "Blocks",
    color: "bg-yellow-500",
    lessons: [
      whatIsFunction,
      whyUseFunctions,
      syntax,
      parameters,
      callingFunctions,
      goodPractice,
      activity3,
    ],
  },
  {
    id: "section-4",
    title: "Section 4 - Collections (lists, tuples, sets, dictionaries)",
    description: "Working with data structures",
    icon: "Database",
    color: "bg-red-500",
    lessons: [list, tuple, set, dictionary],
  },
  {
    id: "section-5",
    title: "Section 5 - Structs, Classes, and Objects",
    description: "Object-oriented programming concepts",
    icon: "Box",
    color: "bg-indigo-500",
    lessons: [structs, classes, objects],
  },
  {
    id: "section-6",
    title: "Section 6 - Using External Sources",
    description: "Working with files and libraries",
    icon: "FileText",
    color: "bg-teal-500",
    lessons: [fileInput, libraryImports, readingDocumentation],
  },
];
