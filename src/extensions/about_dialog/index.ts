import { IExtensionContext } from '../../types/IExtensionContext';

import AboutButton from './views/AboutButton';
import AboutPage from './views/AboutPage';

function init(context: IExtensionContext): boolean {
  context.registerAction('global-icons', 200, AboutButton, {});

  context.registerMainPage('', 'About', AboutPage, { group: 'hidden' });

  return true;
}

export default init;
