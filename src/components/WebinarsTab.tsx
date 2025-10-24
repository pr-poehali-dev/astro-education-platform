import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const WebinarsTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Video" className="text-primary" size={24} />
              Предстоящие вебинары
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">Транзиты планет в 2024</h4>
                    <p className="text-sm text-muted-foreground">с Мариной Звездной</p>
                  </div>
                  <Badge>Скоро</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>25 октября</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>19:00 МСК</span>
                  </div>
                </div>
                <Button className="w-full mt-4" size="sm">
                  Зарегистрироваться
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Play" className="text-accent" size={24} />
              Записи вебинаров
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-14 rounded bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon name="Play" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">Ретроградный Меркурий</h4>
                    <p className="text-xs text-muted-foreground">1ч 45мин • 523 просмотра</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WebinarsTab;
