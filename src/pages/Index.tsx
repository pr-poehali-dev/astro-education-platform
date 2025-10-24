import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  
  const planets = [
    { name: 'Меркурий', sign: '♊ Близнецы', icon: '☿', color: 'text-yellow-600' },
    { name: 'Венера', sign: '♉ Телец', icon: '♀', color: 'text-pink-500' },
    { name: 'Марс', sign: '♈ Овен', icon: '♂', color: 'text-red-500' },
    { name: 'Юпитер', sign: '♐ Стрелец', icon: '♃', color: 'text-blue-500' },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl animate-float">
                ✨
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Астрологическая Школа
                </h1>
                <p className="text-sm text-muted-foreground">Познай себя через звезды</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Bell" size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </Button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                А
              </div>
            </div>
          </div>
        </div>
      </header>

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

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
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
          </TabsContent>

          <TabsContent value="ephemeris" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="natal" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="horoscope" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {zodiacSigns.map((sign, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{sign}</span>
                      <span className="text-lg">
                        {['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'][i]}
                      </span>
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
          </TabsContent>

          <TabsContent value="courses" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="lunar" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="webinars" className="animate-fade-in">
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
          </TabsContent>

          <TabsContent value="forum" className="animate-fade-in">
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
                  {['Основы астрологии', 'Натальная карта', 'Транзиты и прогнозы', 'Вопросы новичков'].map((topic, i) => (
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
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
