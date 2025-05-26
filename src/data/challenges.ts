
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
    starterCode: {
      javascript: `function twoSum(nums, target) {
    
}`,
      python: `def two_sum(nums, target):
    pass`,
      java: `public class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    
}`,
      csharp: `public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
    }
}`,
      go: `func twoSum(nums []int, target int) []int {
    
}`,
      rust: `impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        
    }
}`,
      php: `<?php
class Solution {
    function twoSum($nums, $target) {
        
    }
}`,
      ruby: `def two_sum(nums, target)
    
end`,
      kotlin: `class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        
    }
}`,
      swift: `class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        
    }
}`,
      typescript: `function twoSum(nums: number[], target: number): number[] {
    
}`,
      dart: `class Solution {
  List<int> twoSum(List<int> nums, int target) {
    
  }
}`,
      scala: `object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
        
    }
}`
    },
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
    starterCode: {
      javascript: `function isPalindrome(s) {
    
}`,
      python: `def is_palindrome(s):
    pass`,
      java: `public class Solution {
    public boolean isPalindrome(String s) {
        
    }
}`,
      cpp: `#include <string>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        
    }
};`,
      c: `#include <stdbool.h>
#include <string.h>

bool isPalindrome(char* s) {
    
}`,
      csharp: `public class Solution {
    public bool IsPalindrome(string s) {
        
    }
}`,
      go: `func isPalindrome(s string) bool {
    
}`,
      rust: `impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        
    }
}`,
      php: `<?php
class Solution {
    function isPalindrome($s) {
        
    }
}`,
      ruby: `def is_palindrome(s)
    
end`,
      kotlin: `class Solution {
    fun isPalindrome(s: String): Boolean {
        
    }
}`,
      swift: `class Solution {
    func isPalindrome(_ s: String) -> Bool {
        
    }
}`,
      typescript: `function isPalindrome(s: string): boolean {
    
}`,
      dart: `class Solution {
  bool isPalindrome(String s) {
    
  }
}`,
      scala: `object Solution {
    def isPalindrome(s: String): Boolean = {
        
    }
}`
    },
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
    starterCode: {
      javascript: `function fibonacci(n) {
    
}`,
      python: `def fibonacci(n):
    pass`,
      java: `public class Solution {
    public int fibonacci(int n) {
        
    }
}`,
      cpp: `class Solution {
public:
    int fibonacci(int n) {
        
    }
};`,
      c: `int fibonacci(int n) {
    
}`,
      csharp: `public class Solution {
    public int Fibonacci(int n) {
        
    }
}`,
      go: `func fibonacci(n int) int {
    
}`,
      rust: `impl Solution {
    pub fn fibonacci(n: i32) -> i32 {
        
    }
}`,
      php: `<?php
class Solution {
    function fibonacci($n) {
        
    }
}`,
      ruby: `def fibonacci(n)
    
end`,
      kotlin: `class Solution {
    fun fibonacci(n: Int): Int {
        
    }
}`,
      swift: `class Solution {
    func fibonacci(_ n: Int) -> Int {
        
    }
}`,
      typescript: `function fibonacci(n: number): number {
    
}`,
      dart: `class Solution {
  int fibonacci(int n) {
    
  }
}`,
      scala: `object Solution {
    def fibonacci(n: Int): Int = {
        
    }
}`
    },
    testCases: [
      { input: '5', expected: '5' },
      { input: '0', expected: '0' },
      { input: '10', expected: '55' }
    ]
  }
];
