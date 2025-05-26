
import { Challenge } from '@/types/challenge';

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers and a target sum, return the indices of two numbers that add up to the target.',
    difficulty: 'Easy',
    category: 'Arrays',
    estimatedTime: 15,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      }
    ],
    hints: [
      'Try using a hash map to store numbers you\'ve seen',
      'For each number, check if (target - number) exists in your hash map',
      'Don\'t forget to return the indices, not the values!'
    ],
    starterCode: `function twoSum(nums, target) {
    // Your solution here
    
}`,
    testCases: [
      { input: '[2,7,11,15], 9', expected: '[0,1]' },
      { input: '[3,2,4], 6', expected: '[1,2]' },
      { input: '[3,3], 6', expected: '[0,1]' }
    ]
  },
  {
    id: '2',
    title: 'Palindrome Check',
    description: 'Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).',
    difficulty: 'Easy',
    category: 'Strings',
    estimatedTime: 10,
    examples: [
      {
        input: '"racecar"',
        output: 'true',
        explanation: 'The string reads the same forwards and backwards.'
      },
      {
        input: '"hello"',
        output: 'false'
      }
    ],
    hints: [
      'Convert the string to lowercase first',
      'Compare characters from start and end moving towards center',
      'You can also reverse the string and compare with original'
    ],
    starterCode: `function isPalindrome(s) {
    // Your solution here
    
}`,
    testCases: [
      { input: '"racecar"', expected: 'true' },
      { input: '"hello"', expected: 'false' },
      { input: '"A man a plan a canal Panama"', expected: 'true' }
    ]
  },
  {
    id: '3',
    title: 'Fibonacci Sequence',
    description: 'Generate the nth number in the Fibonacci sequence. The sequence starts with 0, 1, and each subsequent number is the sum of the previous two.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    estimatedTime: 20,
    examples: [
      {
        input: 'n = 5',
        output: '5',
        explanation: 'The sequence is [0, 1, 1, 2, 3, 5], so the 5th number is 5.'
      },
      {
        input: 'n = 0',
        output: '0'
      }
    ],
    hints: [
      'Think about the base cases: F(0) = 0, F(1) = 1',
      'You can solve this iteratively or recursively',
      'For better performance, consider using dynamic programming'
    ],
    starterCode: `function fibonacci(n) {
    // Your solution here
    
}`,
    testCases: [
      { input: '5', expected: '5' },
      { input: '0', expected: '0' },
      { input: '10', expected: '55' }
    ]
  }
];
