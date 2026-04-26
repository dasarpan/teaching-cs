import { Lesson } from "../../types";

export const operators: Lesson = {
  id: "operators",
  title: "Operators: Arithmetic, Logical, and Conditional",
  subsections: [
    {
      id: "logical-operators",
      title: "Logical Operators",
      subsections: [
        {
          id: "logic-detour",
          title: "A Short Detour in Logic",
          subsections: [
            {
              id: "and",
              title: "And",
            },
            {
              id: "or",
              title: "Or",
            },
            {
              id: "not",
              title: "Not",
            },
          ],
        },
      ],
    },
    {
      id: "arithmetic-operators",
      title: "Arithmetic Operators",
      subsections: [
        {
          id: "basic-arithmetic",
          title: "Addition, Subtraction, Multiplication, and Division",
        },
        {
          id: "floor-division",
          title: "Floor (int) Division",
        },
        {
          id: "modulus",
          title: "Modulus",
        },
        {
          id: "exponentiation",
          title: "Exponentiation",
        },
        {
          id: "shortcuts",
          title: "Shortcuts",
        },
      ],
    },
    {
      id: "conditional-operators",
      title: "Conditional Operators",
    },
  ],
};
