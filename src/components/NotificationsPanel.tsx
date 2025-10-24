import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Notification {
  id: string;
  type: 'planet' | 'moon' | 'course' | 'webinar';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationsPanelProps {
  open: boolean;
  onClose: () => void;
}

const NotificationsPanel = ({ open, onClose }: NotificationsPanelProps) => {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'planet',
      title: 'Меркурий входит в Близнецы',
      message: 'Через 2 часа Меркурий войдет в знак Близнецов. Благоприятное время для коммуникации.',
      time: '2 часа',
      read: false
    },
    {
      id: '2',
      type: 'moon',
      title: 'Новый лунный день',
      message: 'Начался 25-й лунный день. Рекомендуется медитация и планирование.',
      time: '3 часа',
      read: false
    },
    {
      id: '3',
      type: 'course',
      title: 'Новый урок доступен',
      message: 'В курсе "Основы астрологии" открылся урок 9: "Аспекты планет"',
      time: '5 часов',
      read: true
    },
    {
      id: '4',
      type: 'webinar',
      title: 'Вебинар начнется скоро',
      message: 'Не забудьте: сегодня в 19:00 вебинар "Транзиты планет в 2024"',
      time: '1 день',
      read: true
    },
    {
      id: '5',
      type: 'planet',
      title: 'Венера в ретроградном движении',
      message: 'Венера начала ретроградное движение. Период для пересмотра отношений.',
      time: '2 дня',
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'planet': return 'Globe';
      case 'moon': return 'Moon';
      case 'course': return 'GraduationCap';
      case 'webinar': return 'Video';
      default: return 'Bell';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'planet': return 'text-primary';
      case 'moon': return 'text-secondary';
      case 'course': return 'text-accent';
      case 'webinar': return 'text-purple-400';
      default: return 'text-foreground';
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-card border-l shadow-2xl animate-slide-in-right">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Bell" size={24} className="text-primary" />
                Уведомления
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-80px)]">
              <div className="p-4 space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 rounded-lg border transition-all cursor-pointer hover:bg-accent/5 ${
                      !notif.read ? 'bg-primary/5 border-primary/20' : 'bg-card'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className={`mt-1 ${getColor(notif.type)}`}>
                        <Icon name={getIcon(notif.type)} size={20} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-sm">{notif.title}</h4>
                          {!notif.read && (
                            <Badge variant="default" className="h-5 px-2 text-xs">
                              Новое
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {notif.message}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                          <Icon name="Clock" size={12} />
                          <span>{notif.time} назад</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotificationsPanel;
