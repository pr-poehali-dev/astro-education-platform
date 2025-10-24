import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  user: { name: string; email: string } | null;
  onNotificationsClick: () => void;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Header = ({ user, onNotificationsClick, onLoginClick, onLogout }: HeaderProps) => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl animate-float">
              ✨
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Астрологическая Школа
              </h1>
              <p className="text-sm text-muted-foreground">Познай себя через звезды</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Button variant="ghost" size="icon" className="relative" onClick={onNotificationsClick}>
                  <Icon name="Bell" size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                </Button>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {user.name.charAt(0)}
                  </div>
                  <Button variant="ghost" size="icon" onClick={onLogout}>
                    <Icon name="LogOut" size={18} />
                  </Button>
                </div>
              </>
            ) : (
              <Button onClick={onLoginClick} className="gap-2">
                <Icon name="LogIn" size={18} />
                Войти
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
