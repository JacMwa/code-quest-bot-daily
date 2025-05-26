
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Target, Lightbulb } from 'lucide-react';
import { Challenge } from '@/types/challenge';

interface ChallengeCardProps {
  challenge: Challenge;
  onStart: () => void;
}

const ChallengeCard = ({ challenge, onStart }: ChallengeCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl">{challenge.title}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge className={getDifficultyColor(challenge.difficulty)}>
                {challenge.difficulty}
              </Badge>
              <Badge variant="outline">{challenge.category}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{challenge.estimatedTime} min</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Target className="h-4 w-4" />
            Problem Description
          </h3>
          <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Examples:</h3>
          <div className="space-y-3">
            {challenge.examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg border">
                <div className="font-mono text-sm space-y-1">
                  <div><span className="text-blue-600">Input:</span> {example.input}</div>
                  <div><span className="text-green-600">Output:</span> {example.output}</div>
                  {example.explanation && (
                    <div className="text-gray-600 text-xs mt-2">
                      <span className="font-semibold">Explanation:</span> {example.explanation}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {challenge.hints && challenge.hints.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Hints
            </h3>
            <ul className="space-y-1">
              {challenge.hints.map((hint, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">💡</span>
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button 
          onClick={onStart} 
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white"
          size="lg"
        >
          <Play className="h-5 w-5 mr-2" />
          Start Coding Challenge
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
