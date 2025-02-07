import { COLORS } from '../../../libs/colors.ts';

type LevelType = 'info' | 'warn' | 'error';

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const colorLevel: Record<LevelType, string> = {
  info: COLORS.blue,
  warn: COLORS.yellow,
  error: COLORS.red
};

const levelName: Record<LevelType, string> = {
  info: '[INFO]',
  warn: '[WARN]',
  error: '[ERROR]'
};

export const loggerFactory = (level: LevelType = 'error') => {
  return (message: string) => {
    const date = formatDate(new Date());
    console.log(`%c${levelName[level]} ${date}: ${message}`, colorLevel[level]);
  };
};
