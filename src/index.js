import Alpine from 'alpinejs';
window.Alpine = Alpine;
queueMicrotask(() => {
    Alpine.start()
});
import {main,image,image2} from './RemoteControl'


window.main = main;
window.image = image;
window.image2 = image2;
