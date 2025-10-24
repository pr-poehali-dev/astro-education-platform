import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface MoonPhase {
  phase: string;
  day: number;
  emoji: string;
  date: string;
}

interface LunarCalendarTabProps {
  moonPhases: MoonPhase[];
}

const LunarCalendarTab = ({ moonPhases }: LunarCalendarTabProps) => {
  return (
    <div className="animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Moon" className="text-primary" size={28} />
            Лунный календарь
          </CardTitle>
          <CardDescription>Фазы луны и лунные дни</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {moonPhases.map((moon, i) => (
              <Card key={i} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="text-5xl mb-2">{moon.emoji}</div>
                  <CardTitle className="text-base">{moon.phase}</CardTitle>
                  <CardDescription className="text-xs">{moon.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-lg font-semibold">
                    День {moon.day}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">24-й лунный день — Новолуние 🌑</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Новолуние — время новых начинаний и планирования. Энергия этого дня способствует медитации, 
                размышлениям о будущем и постановке целей. Избегайте важных решений, посвятите время внутренней работе.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-600">✓ Благоприятно</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Медитация и йога</li>
                    <li>• Планирование</li>
                    <li>• Отдых и восстановление</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-red-600">✗ Не рекомендуется</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Важные сделки</li>
                    <li>• Конфликты</li>
                    <li>• Переедание</li>
                  </ul>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомлять о смене лунного дня
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default LunarCalendarTab;
