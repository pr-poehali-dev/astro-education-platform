import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ForumTab = () => {
  const topics = ['Основы астрологии', 'Натальная карта', 'Транзиты и прогнозы', 'Вопросы новичков'];

  return (
    <div className="animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="MessageSquare" className="text-primary" size={28} />
            Учебный форум
          </CardTitle>
          <CardDescription>Общайтесь с преподавателями и студентами</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topics.map((topic, i) => (
              <div key={i} className="p-4 rounded-lg border hover:bg-accent/5 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                      {topic[0]}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{topic}</h4>
                      <p className="text-sm text-muted-foreground">Последнее сообщение 2 часа назад</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{23 + i * 7}</div>
                    <div className="text-xs text-muted-foreground">сообщений</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button className="w-full mt-6" size="lg">
            <Icon name="Plus" size={18} className="mr-2" />
            Создать новую тему
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForumTab;
