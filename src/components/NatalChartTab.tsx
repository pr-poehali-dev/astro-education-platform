import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface NatalChartTabProps {
  zodiacSigns: string[];
}

const NatalChartTab = ({ zodiacSigns }: NatalChartTabProps) => {
  return (
    <div className="animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Circle" className="text-primary" size={28} />
            Натальная карта
          </CardTitle>
          <CardDescription>Ваша персональная астрологическая карта</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center space-y-4">
                <div className="text-6xl">🔮</div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">Ваша натальная карта</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Визуализация построена на основе ваших данных рождения
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {zodiacSigns.map((sign, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg hover:scale-110 transition-transform cursor-pointer">
                      {sign}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="User" size={18} />
                  Личные данные
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дата рождения:</span>
                    <span className="font-medium">15 августа 1990</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Время:</span>
                    <span className="font-medium">14:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Место:</span>
                    <span className="font-medium">Москва, Россия</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Часовой пояс:</span>
                    <span className="font-medium">GMT+3</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h4 className="font-semibold mb-3">Основные позиции</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Солнце</span>
                    <Badge className="bg-primary">♌ Лев</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Луна</span>
                    <Badge variant="secondary">♓ Рыбы</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Асцендент</span>
                    <Badge variant="outline">♏ Скорпион</Badge>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать подробную карту
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NatalChartTab;
