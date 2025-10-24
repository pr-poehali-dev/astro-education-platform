import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Planet {
  name: string;
  sign: string;
  icon: string;
  color: string;
}

interface EphemerisTabProps {
  planets: Planet[];
}

const EphemerisTab = ({ planets }: EphemerisTabProps) => {
  return (
    <div className="animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Globe" className="text-primary" size={28} />
            Эфемериды планет
          </CardTitle>
          <CardDescription>Текущие и предстоящие позиции планет</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {planets.map((planet) => (
              <div key={planet.name} className="p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 hover:from-muted/70 hover:to-muted/50 transition-all border border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl ${planet.color} animate-float`}>{planet.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{planet.name}</h3>
                      <p className="text-sm text-muted-foreground">Текущее положение: {planet.sign}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="Bell" size={16} className="mr-2" />
                    Уведомить
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Следующий знак:</span>
                    <span className="ml-2 font-medium">♋ Рак</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Дата входа:</span>
                    <span className="ml-2 font-medium">15 ноября</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EphemerisTab;
