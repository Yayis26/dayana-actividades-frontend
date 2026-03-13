import laptop from '@/assets/images/laptop.png';
import monitor from '@/assets/images/monitor.png';
import mouse from '@/assets/images/mouse.png';
import teclado from '@/assets/images/teclado.png';

export const products = [
    {
        id:1,
        title: "Laptop Profesional",
        price: 350000,
        description: "Laptop de alto rendimiento para profesionales",
        image: laptop,
        category: "perifericos"
    },
    {
        id:2,
        title: "Monitor 27 Pulgadas",
        price: 120000,
        description: "Monitor IPS ideal para programación y edición",
        image: monitor,
        category: "perifericos"
    },
    {
        id:3,
        title: "Mouse",
        price: 50000,
        description: "Moyse ergonómico, la mejor calidad y precio",
        image: mouse,
        category: "perifericos"
    },
    {
        id:4,
        title: "Teclado Gamer",
        price: 50000,
        description: "Teclado ecanico con iluminación RGB",
        image: teclado,
        category: "perifericos"
    }
];