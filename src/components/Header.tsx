import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;
