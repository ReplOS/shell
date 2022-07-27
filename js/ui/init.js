import { setConsoleLogDomain } from 'console';

setConsoleLogDomain('GNOME Shell');

console.log("Good day my sunshine! ReplOS says hello!");

imports.ui.environment.init();
imports.ui.main.start();
