
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Calendar, Code } from 'lucide-react';
import { Challenge } from '@/types/challenge';

interface StatsPanelProps {
  streak: number;
  totalSolved: number;
  challenges: Challenge[];
}

const StatsPanel = ({ streak, totalSolved, challenges }: StatsPanelProps) => {
  const categoriesCount = challenges.reduce((acc, challenge) => {
    acc[challenge.category] = (acc[challenge.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const difficultyCount = challenges.reduce((acc, challenge) => {
    acc[challenge.difficulty] = (acc[challenge.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Daily Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{streak}</div>
              <div className="text-sm text-orange-700">Day Streak</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{totalSolved}</div>
              <div className="text-sm text-blue-700">Solved</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Weekly Goal</span>
              <span>{streak}/7</span>
            </div>
            <Progress value={(streak / 7) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Challenge Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-green-500" />
            Categories Mastered
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(categoriesCount).map(([category, count]) => (
              <div key={category} className="flex items-center justify-between">
                <span className="text-sm">{category}</span>
                <Badge variant="outline">{count}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Difficulty Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-500" />
            Difficulty Spread
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(difficultyCount).map(([difficulty, count]) => {
              const percentage = (count / challenges.length) * 100;
              return (
                <div key={difficulty}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{difficulty}</span>
                    <span>{count} challenges</span>
                  </div>
                  <Progress value={percentage} className="h-1" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* This Week */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-indigo-500" />
            This Week
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <div 
                key={day} 
                className={`h-8 w-8 rounded text-xs flex items-center justify-center ${
                  index < streak 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsPanel;
