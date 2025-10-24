import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface HoroscopeTabProps {
  zodiacSigns: string[];
}

const HoroscopeTab = ({ zodiacSigns }: HoroscopeTabProps) => {
  const zodiacNames = ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'];

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {zodiacSigns.map((sign, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl group-hover:scale-110 transition-transform">{sign}</span>
                <span className="text-lg">{zodiacNames[i]}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Звезды благоволят вам в этот период. Время для новых начинаний и смелых решений.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  На день
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  На неделю
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HoroscopeTab;
