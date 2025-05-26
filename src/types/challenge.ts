
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
  starterCode: {
    [key: string]: string;
  };
  testCases: {
    input: string;
    expected: string;
  }[];
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  displayName: string;
  fileExtension: string;
}
