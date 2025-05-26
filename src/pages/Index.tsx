
import { useState, useEffect } from 'react';
import { Bot, Code, Trophy, Flame, Calendar, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ChallengeCard from '@/components/ChallengeCard';
import CodeEditor from '@/components/CodeEditor';
import StatsPanel from '@/components/StatsPanel';
import { challenges } from '@/data/challenges';

const Index = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalSolved, setTotalSolved] = useState(23);
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);
  const [showEditor, setShowEditor] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartChallenge = () => {
    setShowEditor(true);
    setIsTimerRunning(true);
    setTimeElapsed(0);
  };

  const handleNextChallenge = () => {
    const nextIndex = (challenges.indexOf(currentChallenge) + 1) % challenges.length;
    setCurrentChallenge(challenges[nextIndex]);
    setShowEditor(false);
    setIsTimerRunning(false);
    setTimeElapsed(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  CodeQuest Bot
                </h1>
                <p className="text-sm text-gray-600">Daily Coding Challenges</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-orange-600">
                <Flame className="h-5 w-5" />
                <span className="font-semibold">{currentStreak} day streak</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Trophy className="h-5 w-5" />
                <span className="font-semibold">{totalSolved} solved</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Challenge Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bot Message */}
            <Card className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-2">Good morning, Coder! 🌟</h2>
                    <p className="text-blue-100 mb-4">
                      Ready for today's challenge? I've picked a {currentChallenge.difficulty} level problem 
                      that will help you practice {currentChallenge.category}. Let's code together!
                    </p>
                    <div className="flex items-center gap-4 text-sm text-blue-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Day {totalSolved + 1}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Estimated: {currentChallenge.estimatedTime} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timer */}
            {isTimerRunning && (
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Clock className="h-5 w-5" />
                      <span className="font-medium">Time Elapsed</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-yellow-800">
                      {formatTime(timeElapsed)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Challenge or Editor */}
            {!showEditor ? (
              <ChallengeCard 
                challenge={currentChallenge} 
                onStart={handleStartChallenge}
              />
            ) : (
              <CodeEditor 
                challenge={currentChallenge}
                onNext={handleNextChallenge}
                timeElapsed={timeElapsed}
                onStop={() => setIsTimerRunning(false)}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <StatsPanel 
              streak={currentStreak}
              totalSolved={totalSolved}
              challenges={challenges}
            />

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-500 p-2 rounded-full">
                    <Flame className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Week Warrior</p>
                    <p className="text-sm text-green-600">7 day streak!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Algorithm Explorer</p>
                    <p className="text-sm text-blue-600">Solved 5 algorithm challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress to Next Level */}
            <Card>
              <CardHeader>
                <CardTitle>Progress to Intermediate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Level Progress</span>
                    <span>23/30</span>
                  </div>
                  <Progress value={76.7} className="h-2" />
                  <p className="text-sm text-gray-600">7 more challenges to reach Intermediate level!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
