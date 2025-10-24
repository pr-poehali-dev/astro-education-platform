import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Course {
  title: string;
  progress: number;
  lessons: number;
  completed: number;
  level: string;
}

interface CoursesTabProps {
  courses: Course[];
}

const CoursesTab = ({ courses }: CoursesTabProps) => {
  return (
    <div className="animate-fade-in">
      <div className="space-y-6">
        {courses.map((course, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardDescription>
                    Пройдено {course.completed} из {course.lessons} уроков
                  </CardDescription>
                </div>
                <Icon name="GraduationCap" size={32} className="text-primary opacity-50" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс обучения</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <Icon name="BookOpen" size={20} className="mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium">{course.lessons} уроков</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <Icon name="Video" size={20} className="mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium">8 видео</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <Icon name="Award" size={20} className="mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium">Сертификат</div>
                  </div>
                </div>

                <Button className="w-full" size="lg" disabled={course.progress === 0}>
                  {course.progress === 0 ? 'Начать курс' : 'Продолжить обучение'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesTab;
