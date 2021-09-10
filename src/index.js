import Alpine from 'alpinejs';
window.Alpine = Alpine;
queueMicrotask(() => {
    Alpine.start()
});
import main from './RemoteControl'

window.main = main;
