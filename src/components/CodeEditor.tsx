
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle, XCircle, SkipForward, Lightbulb } from 'lucide-react';
import { Challenge } from '@/types/challenge';
import { toast } from 'sonner';

interface CodeEditorProps {
  challenge: Challenge;
  onNext: () => void;
  timeElapsed: number;
  onStop: () => void;
}

const CodeEditor = ({ challenge, onNext, timeElapsed, onStop }: CodeEditorProps) => {
  const [code, setCode] = useState(challenge.starterCode || '// Your code here\n');
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    
    // Simulate test execution
    setTimeout(() => {
      const results = challenge.testCases.map((testCase, index) => ({
        id: index,
        input: testCase.input,
        expected: testCase.expected,
        actual: testCase.expected, // In a real implementation, this would run the code
        passed: Math.random() > 0.3 // Simulate some tests passing
      }));
      
      setTestResults(results);
      setIsRunning(false);
      
      const allPassed = results.every(r => r.passed);
      if (allPassed) {
        toast.success('🎉 All tests passed! Challenge completed!');
        onStop();
      } else {
        toast.error('Some tests failed. Keep trying!');
      }
    }, 2000);
  };

  const handleSubmit = () => {
    if (testResults.every(r => r.passed)) {
      toast.success('Challenge submitted successfully!');
      onNext();
    } else {
      toast.error('Please make sure all tests pass before submitting.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Code Editor */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              Code Editor - {challenge.title}
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHints(!showHints)}
            >
              <Lightbulb className="h-4 w-4 mr-1" />
              Hints
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-mono text-sm min-h-[300px] resize-none"
              placeholder="Write your solution here..."
            />
            <div className="flex gap-2">
              <Button 
                onClick={runTests} 
                disabled={isRunning}
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="h-4 w-4 mr-2" />
                {isRunning ? 'Running...' : 'Run Tests'}
              </Button>
              <Button onClick={handleSubmit} variant="outline">
                Submit Solution
              </Button>
              <Button onClick={onNext} variant="outline">
                <SkipForward className="h-4 w-4 mr-2" />
                Skip Challenge
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hints Panel */}
      {showHints && challenge.hints && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Helpful Hints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {challenge.hints.map((hint, index) => (
                <li key={index} className="text-yellow-700 flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">💡</span>
                  {hint}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Test Results */}
      {testResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {testResults.map((result) => (
                <div 
                  key={result.id} 
                  className={`p-3 rounded-lg border-2 ${
                    result.passed 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Test Case {result.id + 1}</span>
                    {result.passed ? (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Passed
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 border-red-200">
                        <XCircle className="h-3 w-3 mr-1" />
                        Failed
                      </Badge>
                    )}
                  </div>
                  <div className="font-mono text-sm space-y-1">
                    <div><span className="font-semibold">Input:</span> {result.input}</div>
                    <div><span className="font-semibold">Expected:</span> {result.expected}</div>
                    <div><span className="font-semibold">Actual:</span> {result.actual}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CodeEditor;
