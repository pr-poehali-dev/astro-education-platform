import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Planet {
  name: string;
  sign: string;
  icon: string;
  color: string;
}

interface DashboardTabProps {
  planets: Planet[];
}

const DashboardTab = ({ planets }: DashboardTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Активные курсы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">2</div>
            <p className="text-xs text-muted-foreground mt-1">из 3 курсов</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Пройдено уроков</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">13</div>
            <p className="text-xs text-muted-foreground mt-1">из 37 уроков</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Лунный день</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">24 🌑</div>
            <p className="text-xs text-muted-foreground mt-1">Новолуние</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Уведомления</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-serif">5</div>
            <p className="text-xs text-muted-foreground mt-1">новых событий</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Globe" className="text-primary" size={24} />
              Позиции планет
            </CardTitle>
            <CardDescription>Текущие положения планет в знаках зодиака</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {planets.map((planet) => (
              <div key={planet.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`text-2xl ${planet.color}`}>{planet.icon}</div>
                  <div>
                    <div className="font-medium">{planet.name}</div>
                    <div className="text-sm text-muted-foreground">{planet.sign}</div>
                  </div>
                </div>
                <Badge variant="outline" className="font-mono">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  Директно
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Star" className="text-accent" size={24} />
              Персональный гороскоп
            </CardTitle>
            <CardDescription>Прогноз на сегодня</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="text-3xl">♌</div>
                <div>
                  <h4 className="font-semibold mb-2">Лев</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Сегодня благоприятный день для новых начинаний. Венера в вашем знаке приносит гармонию в отношениях. Меркурий помогает в коммуникации.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl mb-1">💼</div>
                <div className="text-xs text-muted-foreground">Карьера</div>
                <div className="text-sm font-semibold mt-1">8/10</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl mb-1">❤️</div>
                <div className="text-xs text-muted-foreground">Любовь</div>
                <div className="text-sm font-semibold mt-1">9/10</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl mb-1">💪</div>
                <div className="text-xs text-muted-foreground">Здоровье</div>
                <div className="text-sm font-semibold mt-1">7/10</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardTab;
