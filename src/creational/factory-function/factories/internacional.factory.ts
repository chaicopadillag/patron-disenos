type LanguageType = 'es' | 'en' | 'fr';

export const saludarIntl = (lang: LanguageType = 'es') => {
  return (name: string) => {
    let message = 'Hola';
    switch (lang) {
      case 'en':
        message = `Hello ${name}`;
        break;
      case 'fr':
        message = `Bonjour ${name}`;
        break;
      default:
        message = `Hola ${name}`;
        break;
    }

    console.log(message);
  };
};
