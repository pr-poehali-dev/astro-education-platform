import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import AuthDialog from '@/components/AuthDialog';
import NotificationsPanel from '@/components/NotificationsPanel';
import DashboardTab from '@/components/DashboardTab';
import EphemerisTab from '@/components/EphemerisTab';
import NatalChartTab from '@/components/NatalChartTab';
import HoroscopeTab from '@/components/HoroscopeTab';
import CoursesTab from '@/components/CoursesTab';
import LunarCalendarTab from '@/components/LunarCalendarTab';
import WebinarsTab from '@/components/WebinarsTab';
import ForumTab from '@/components/ForumTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  
  const planets = [
    { name: 'Меркурий', sign: '♊ Близнецы', icon: '☿', color: 'text-yellow-400' },
    { name: 'Венера', sign: '♉ Телец', icon: '♀', color: 'text-pink-400' },
    { name: 'Марс', sign: '♈ Овен', icon: '♂', color: 'text-red-400' },
    { name: 'Юпитер', sign: '♐ Стрелец', icon: '♃', color: 'text-orange-400' },
  ];

  const courses = [
    { 
      title: 'Основы астрологии', 
      progress: 65, 
      lessons: 12, 
      completed: 8,
      level: 'Начальный'
    },
    { 
      title: 'Натальная карта', 
      progress: 30, 
      lessons: 15, 
      completed: 5,
      level: 'Средний'
    },
    { 
      title: 'Прогнозы и транзиты', 
      progress: 0, 
      lessons: 10, 
      completed: 0,
      level: 'Продвинутый'
    },
  ];

  const moonPhases = [
    { phase: 'Новолуние', day: 24, emoji: '🌑', date: '24 октября' },
    { phase: 'Растущая луна', day: 25, emoji: '🌒', date: '25 октября' },
    { phase: 'Первая четверть', day: 1, emoji: '🌓', date: '1 ноября' },
    { phase: 'Полнолуние', day: 8, emoji: '🌕', date: '8 ноября' },
  ];

  const handleAuthSuccess = (userData: { name: string; email: string }) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header 
        user={user}
        onNotificationsClick={() => setShowNotifications(true)}
        onLoginClick={() => setShowAuthDialog(true)}
        onLogout={handleLogout}
      />

      <AuthDialog 
        open={showAuthDialog}
        onOpenChange={setShowAuthDialog}
        onAuthSuccess={handleAuthSuccess}
      />

      <NotificationsPanel 
        open={showNotifications}
        onClose={() => setShowNotifications(false)}
      />

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-2 h-auto p-2 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Icon name="LayoutDashboard" size={16} />
              <span className="hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="ephemeris" className="flex items-center gap-2">
              <Icon name="Globe" size={16} />
              <span className="hidden sm:inline">Эфемериды</span>
            </TabsTrigger>
            <TabsTrigger value="natal" className="flex items-center gap-2">
              <Icon name="Circle" size={16} />
              <span className="hidden sm:inline">Карта</span>
            </TabsTrigger>
            <TabsTrigger value="horoscope" className="flex items-center gap-2">
              <Icon name="Star" size={16} />
              <span className="hidden sm:inline">Гороскоп</span>
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <Icon name="GraduationCap" size={16} />
              <span className="hidden sm:inline">Курсы</span>
            </TabsTrigger>
            <TabsTrigger value="lunar" className="flex items-center gap-2">
              <Icon name="Moon" size={16} />
              <span className="hidden sm:inline">Луна</span>
            </TabsTrigger>
            <TabsTrigger value="webinars" className="flex items-center gap-2">
              <Icon name="Video" size={16} />
              <span className="hidden sm:inline">Вебинары</span>
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <Icon name="MessageSquare" size={16} />
              <span className="hidden sm:inline">Форум</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardTab planets={planets} />
          </TabsContent>

          <TabsContent value="ephemeris">
            <EphemerisTab planets={planets} />
          </TabsContent>

          <TabsContent value="natal">
            <NatalChartTab zodiacSigns={zodiacSigns} />
          </TabsContent>

          <TabsContent value="horoscope">
            <HoroscopeTab zodiacSigns={zodiacSigns} />
          </TabsContent>

          <TabsContent value="courses">
            <CoursesTab courses={courses} />
          </TabsContent>

          <TabsContent value="lunar">
            <LunarCalendarTab moonPhases={moonPhases} />
          </TabsContent>

          <TabsContent value="webinars">
            <WebinarsTab />
          </TabsContent>

          <TabsContent value="forum">
            <ForumTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
