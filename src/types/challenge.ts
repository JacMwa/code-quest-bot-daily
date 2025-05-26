
export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  estimatedTime: number;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  hints?: string[];
  starterCode?: string;
  testCases: {
    input: string;
    expected: string;
  }[];
}
